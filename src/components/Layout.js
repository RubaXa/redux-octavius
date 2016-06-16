import classNames from 'classnames';
import React, {Component} from 'react';

export default class Layout extends Component {
	render() {
		const {left, main, right, bordered} = this.props;
		const classes = classNames({
			'layout': true,
			'layout_size_m': true,
			'layout_type_2pane': true,
			'layout_left-size_11': true,
			'layout_right-size_12': true,
			'layout_sidebar-size_12': true,
			'layout_bordered': bordered
		});

		return (
			<div className={classes}>
				<div className="layout__column layout__column_left">{left}</div>
				<div className="layout__main-frame">{main}</div>
				<div className="layout__column layout__column_right">{right}</div>
			</div>
		);
	}
}
