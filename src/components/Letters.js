import classNames from 'classnames';
import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as selectionActions from '../actions/selection';

import ReactList from 'react-list';
import LettersItem from './LettersItem';

@connect(
	(state) => state,
	(dispatch) => ({
		selectionActions: bindActionCreators(selectionActions, dispatch),
	})
)
export default class Letters extends Component {
	handleToggleSelect(evt, model) {
		evt.preventDefault();
		this.props.selectionActions.toggle(model.id);
	}

	render() {
		const {models, selection} = this.props;

		const classes = classNames({
			'dataset': true,
			'dataset_fluid': true,
			'dataset_select-mode_off': true
		});

		const fragment = (
			<div className="dataset-letters">
				<div className={classes}>
					<ReactList
						itemsRenderer={(items, ref) => <div ref={ref} className="dataset__items">{items}</div>}
						itemRenderer={(idx, key) => {
							const model = models[idx];

							return <LettersItem
								key={key}
								model={model}
								selected={selection[model.id]}
								onToggleSelect={(evt) => this.handleToggleSelect(evt, model)}
							/>
						}}
						length={models.length}
						type="simple"
					  />
				</div>
			</div>
		);

		return fragment;
	}
}
