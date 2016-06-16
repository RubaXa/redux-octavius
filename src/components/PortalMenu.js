import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as selectionActions from '../actions/selection';

import Button from './Button';
import Layout from './Layout';

@connect(
	({selection}) => ({selectedCount: Object.keys(selection).length}),
	(dispatch) => ({
		selectionActions: bindActionCreators(selectionActions, dispatch),
	})
)
export default class ProtalMenu extends Component {
	render() {
		const {selectedCount, selectionActions, threads} = this.props;
		const logo = <span className="portal-menu__logo" alt="Почта@Mail.Ru" title="Почта@Mail.Ru"/>;
		const actions = (<div>
			<Button
				onTap={(evt) => selectionActions.selectAll(threads)}
				text="Выделить все"
				ico="toolbar_select-all"
				borderless
				short
				size="xl"/>

				{selectedCount ? <span class="portal-menu__title">{selectedCount}</span> : null}
		</div>);

		return (
			<div className="portal-menu">
				<Layout
					left={logo}
					main={actions}
				/>
			</div>
		);
	}
};
