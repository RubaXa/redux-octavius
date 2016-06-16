import React, {Component} from 'react';
import classNames from 'classnames';

import Icon from './Icon';

export default class FoldersItem extends Component {
	render() {
		const {model, active} = this.props;
		const classes = classNames({
			'nav__item': true,
			'nav__item_active': active,
			'nav__item_shortcut': model.system,
			'nav__item_highlight': false
		});

		return (
			<a key={model.id} href={`/${model.id}/`} className={classes}>
				<span className="nav__ico">
					<Icon map="folder" mod={model.type} size="m"/>
				</span>

				{model.messages_unread
					? <span className="nav__badge">{model.messages_unread}</span>
					: null
				}

				<span className="nav__txt">{model.name}</span>
			</a>
		);
	}
}
