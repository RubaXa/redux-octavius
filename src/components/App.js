import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {routerActions} from 'react-router-redux';
import {fetchStatus} from '../actions/status';

import fetchData from '../decorators/fetchData';

import AuthForm from './AuthForm';
import Layout from './Layout';
import Headline from './Headline';
import Scrollable from './Scrollable';
import PortalMenu from './PortalMenu';
import Folders from './Folders';
import Letters from './Letters';

@connect(
	({auth, folders, threads}, {params}) => ({
		auth,
		folders,
		threads: threads.current[params.folder|0] || []
	}),
	(dispatch) => ({
		actions: bindActionCreators({fetchStatus}, dispatch),
		routerActions: bindActionCreators({...routerActions}, dispatch),
	})
)
@fetchData(
	({auth: email}, {folder}) => ({email, folder}),
	({email, folder}, actions) => email && actions.fetchStatus(folder)
)
export default class App extends Component {
	handleGlobalClick(evt) {
		if (!evt.defaultPrevented) {
			let el = evt.target;

			while (el.parentNode && el !== this.refs.clickable) {
				if (el.tagName === 'A') {
					evt.preventDefault();
					this.props.routerActions.push(el.pathname);
					return;
				}

				el = el.parentNode;
			}
		}
	}

	render() {
		const {auth, folders, threads, params} = this.props;
		const folderId = params.folder|0;

		if (auth.state) {
			const sidebar = <Folders models={folders} active={folderId}/>;
			const main = <Letters models={threads}/>;

			return <div ref="clickable" onClick={(evt) => this.handleGlobalClick(evt)}>
				<Headline/>
				<PortalMenu />
				<Layout
					bordered
					left={<Scrollable content={sidebar}/>}
					main={<Scrollable content={main}/>}
				/>
			</div>;
		} else {
			return <AuthForm/>;
		}
	}
}
