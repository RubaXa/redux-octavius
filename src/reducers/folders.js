import {STATUS_FETCH_SUCCESS} from '../constants/status';

export default (state = [], action) => {
	switch (action.type) {
		case STATUS_FETCH_SUCCESS:
			return action.result.folders;

		default:
			return state;
	}
};
