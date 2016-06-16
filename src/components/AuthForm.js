import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/auth';

import Button from './Button';

@connect(
	({auth}) => auth,
	(dispatch) => ({
		authActions: bindActionCreators(actions, dispatch)
	})
)
export default class AuthForm extends Component {
	handleSubmit(evt) {
		const {email, pass} = this.refs;
		this.props.authActions.login(email.value, pass.value);
		evt.preventDefault();
	}

	render() {
		const {error, busy} = this.props;

		return (
			<form className="well auth-form" onSubmit={::this.handleSubmit}>
				<h2>Авторизуйся, смерд!</h2>
				{error ? <b>Ошибка</b> : null}
				<input ref="email" className="input" placeholder="Email" name="email"/>
				<p><input ref="pass" className="input" placeholder="Password" name="pass" type="password"/></p>
				<Button text="Войти" type="submit" disabled={busy}/>
			</form>
		);
	}
}
