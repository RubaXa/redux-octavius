import {LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS} from '../constants/auth';

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

		case LOGIN_SUCCESS:
			return {...state, state: true, busy: false};

		case LOGIN_FAIL:
			return {...state, error: true, busy: false};

		default:
			return state;
	}
};
