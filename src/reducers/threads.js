import {STATUS_FETCH_SUCCESS} from '../constants/status';

const initialState = {
	current: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case STATUS_FETCH_SUCCESS:
			const {folder} = action.data;
			let {threads} = action.result;

			threads = threads
				.concat(threads, threads, threads, threads, threads)
				.sort(() => Math.random() - Math.random());

			return {
				...state,
				current: {
					...state.current,
					[folder]: threads,
				}
			};

		default:
			return state;
	}
};
