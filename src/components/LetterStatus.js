import classNames from 'classnames';
import React, {Component} from 'react';

import Icon from './Icon';

const statusToIcoMap = {
	'unread': 'letterstatus',
	'flagged': 'toolbar'
};

const statusToIcoMod = {
	'unread': 'unread',
	'flagged': 'mark'
};

export default class LetterStatus extends Component {
	render() {
		const {name, state, size} = this.props;
		const classes = classNames({
			'letter-status': true,
			[`letter-status_${name}`]: true,
			[`letter-status_${name}_${state}`]: true,
		});

		return <div className={classes}>
			<Icon
				map={statusToIcoMap[name]}
				mod={statusToIcoMod[name]}
				size={size}
			/>
		</div>;
	}
};
