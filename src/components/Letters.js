import classNames from 'classnames';
import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as selectionActions from '../actions/selection';

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
					<div className="dataset__items">{models.map((model) => {
						return <LettersItem
							key={model.id}
							model={model}
							selected={selection[model.id]}
							onToggleSelect={(evt) => this.handleToggleSelect(evt, model)}
						/>
					})}</div>
				</div>
			</div>
		);

		return fragment;
	}
}
