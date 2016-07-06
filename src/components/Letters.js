import classNames from 'classnames';
import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as selectionActions from '../actions/selection';

import {AutoSizer, VirtualScroll} from 'react-virtualized';
import LettersItem from './LettersItem';

@connect(
	(state) => state,
	(dispatch) => ({
		selectionActions: bindActionCreators(selectionActions, dispatch),
	})
)
export default class Letters extends Component {
	constructor(args) {
		super(...args);
		this._rowRenderer = this._rowRenderer.bind(this);
	}

	handleToggleSelect(evt, model) {
		evt.preventDefault();
		this.props.selectionActions.toggle(model.id);
	}

	_rowRenderer({index}) {
		const model = this.props.models[index];
		const key = model.id;

		return <LettersItem
			key={key}
			model={model}
			selected={this.props.selection[model.id]}
			onToggleSelect={(evt) => this.handleToggleSelect(evt, model)}
		/>
	}

	render() {
		const {models} = this.props;

		const classes = classNames({
			'dataset': true,
			'dataset_fluid': true,
			'dataset_select-mode_off': true
		});

		const fragment = (
			<AutoSizer>
				{({width}) => (
					<div className="dataset-letters">
						<div className={classes}>
							<div className="dataset__items">
								<VirtualScroll
									width={width}
									rowCount={models.length}
									rowHeight={44}
									rowRenderer={this._rowRenderer}
								/>
							</div>
						</div>
					</div>
				)}
			</AutoSizer>
		);

		return fragment;
	}
}
