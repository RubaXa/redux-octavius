import classNames from 'classnames';
import React, {Component} from 'react';

export default class Icon extends Component {
	render() {
		let {name, map, mod, size} = this.props;

		if (name) {
			[map, mod] = name.split('_');
		}

		const classes = classNames({
			'ico': true,
			[`ico_${map}`]: true,
			[`ico_${map}_${mod}`]: true,
			[`ico_size_${size}`]: size
		});

		return <i className={classes}/>;
	}
}
