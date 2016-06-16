import {TOGGLE, SELECT_ALL} from '../constants/selection';

export default (state = {}, {type, id, threads}) => {
	switch (type) {
		case TOGGLE:
			state = {...state};
			if (state[id]) {
				delete state[id];
			} else {
				state[id] = true;
			}
			return state;

		case SELECT_ALL:
			if (Object.keys(state).length > 0) {
				state = {};
			} else {
				state = {};
				for (const thread of threads) {
					state[thread.id] = true;
				}
			}

			return state;

		default:
			return state;
	}
};
