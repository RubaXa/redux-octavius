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
		// todo
	}

	render() {
		const {auth, folders, threads, params} = this.props;
		const folderId = params.folder|0;

		if (auth.state) {
			const sidebar = <Folders models={folders} active={folderId}/>;
			const main = <Letters models={threads}/>;

			return <div onClick={(evt) => this.handleGlobalClick(evt)}>
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
