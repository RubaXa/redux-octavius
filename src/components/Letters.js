import classNames from 'classnames';
import React, {Component} from 'react';

import LettersItem from './LettersItem';

export default class Letters extends Component {
	handleToggleSelect(evt, model) {
		// todo
		evt.preventDefault();
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
							selected={false}
							onToggleSelect={(evt) => this.handleToggleSelect(evt, model)}
						/>
					})}</div>
				</div>
			</div>
		);

		return fragment;
	}
}
