import {USER_SHORT_METHOD} from '../constants/api';
import {USER_FETCH, USER_FETCH_FAIL, USER_FETCH_SUCCESS} from '../constants/user';

export const fetchUser = (email) => ({
	api: USER_SHORT_METHOD,
	data: {email},
	types: [USER_FETCH, USER_FETCH_SUCCESS, USER_FETCH_FAIL]
});
