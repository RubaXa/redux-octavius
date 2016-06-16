import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {routerActions} from 'react-router-redux';

import AuthForm from './AuthForm';

@connect(state => state)
export default class App extends Component {
	render() {
		const {auth} = this.props;
		return !auth.state ? <AuthForm/> : <h1>Привет, {auth.email}!</h1>;
	}
}
