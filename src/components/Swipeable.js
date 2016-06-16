import classNames from 'classnames';
import React, {Component} from 'react';

export default class Swipeable extends Component {
	constructor(props) {
		super(props);
		this.state = {underlay: false, animated: true};
	}

	componentDidMount() {
		// todo
	}

	componentWillUnmount() {
		// todo
	}

	render() {
		const {underlay, content} = this.props;
		const classes = classNames({
			'swipeable': true,
			'swipeable_animated': this.state.animated
		});

		return <div ref="root" className={classes}>
			{this.state.underlay ? <div className="swipeable__underlay">{underlay}</div> : null}
			<div className="swipeable__content" ref="content">{content}</div>
		</div>;
	}
};
