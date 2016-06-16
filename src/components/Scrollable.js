import React, {Component} from 'react';

let windowHeight;
let style = document.createElement('style');

const reflow = () => {
	const height = window.innerHeight;

	if (windowHeight != height) {
		windowHeight = height;
		style.height = (windowHeight - 76) + 'px';
	}
};

style.type = 'text/css';
style.innerHTML = '.g-scrollable {position: relative;}';

document.head.appendChild(style);
style = style.sheet.rules[0].style;

reflow();

let pid;
window.addEventListener('resize', () => {
	if (!pid) {
		pid = setTimeout(() => {
			pid = null;
			reflow();
		}, 100);
	}
});


export default class Scrollable extends Component {
	render() {
		const {content} = this.props;
		return <div className="scrollable g-scrollable">{content}</div>;
	}
};
