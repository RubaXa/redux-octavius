import {USER_LOGIN_MEETHOD} from '../constants/api';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../constants/auth';
import {fetchUser} from './user';

export const login = (email, password) => async (dispatch) => {
	const response = await dispatch({
		api: USER_LOGIN_MEETHOD,
		data: {email, password},
		types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL],
	});

	if (!response.error) {
		return dispatch(fetchUser(email));
	}
};
