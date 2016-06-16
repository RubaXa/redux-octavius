import {USER_LOGIN_MEETHOD} from '../constants/api';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../constants/auth';

export const login = (email, password) => ({
	api: USER_LOGIN_MEETHOD,
	data: {email, password},
	types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL],
});
