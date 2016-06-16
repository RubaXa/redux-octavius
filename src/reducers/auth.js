import {LOGIN_REQUEST, LOGIN_FAIL} from '../constants/auth';
import {USER_FETCH_SUCCESS, USER_FETCH_FAIL} from '../constants/user';

const initialState = {
	state: false,
	email: null,
	error: false,
	busy: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {...state, busy: true};

		case USER_FETCH_SUCCESS:
			const email = `${action.result.login}@${action.result.domain}`;
			return {...state, ...action.result, email, state: true, busy: false};

		case LOGIN_FAIL:
		case USER_FETCH_FAIL:
			return {...state, error: true, busy: false};

		default:
			return state;
	}
};
