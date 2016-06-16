import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

export default class Avatar extends Component {
	render() {
		const {src, size} = this.props;
		const classes = classNames({
			'avatar': true,
			'avatar_rounded': true,
			[`avatar_size_${size}`]: size
		});

		//return <div className={classes}/>;
		return <img src={(src + '').replace(/&amp;/g, '&')} draggable="false" className={classes}/>;
	}
};
