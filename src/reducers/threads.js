import {STATUS_FETCH_SUCCESS} from '../constants/status';

const initialState = {
	current: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case STATUS_FETCH_SUCCESS:
			const {folder} = action.data;
			const {threads} = action.result;
			return {...state, current: {...state.current, [folder]: threads}};

		default:
			return state;
	}
};
