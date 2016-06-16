import classNames from 'classnames';
import React, {Component} from 'react';

import Icon from './Icon';

export default class Button extends Component {
	render() {
		const {text, short, ico, big, pressed, borderless, type, size, onTap, disabled} = this.props;
		const classes = classNames({
			'button': true,
			'button_short': short || !text,
			'button_has-ico': ico,
			'button_big': big,
			'button_pressed': pressed,
			'button_borderless': borderless,
			'button_primary': type == 'submit',
			[`button_size_${size}`]: size,
		});

		return (
			<button className={classes} type={type} onClick={onTap} disabled={disabled}>
				{ico ? (
					<span className={classNames({'button__ico': true, [`button__ico_size_${size}`]: size})}>
						<Icon name={ico} size={size}/>
					</span>
				) : null}
				{!short && text ? <span className="button__txt">{text}</span> : null}
			</button>
		);
	}
};
