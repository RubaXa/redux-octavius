import {TOGGLE, SELECT_ALL} from '../constants/selection';

export const toggle = (id) => ({
	type: TOGGLE,
	id,
});

export const selectAll = (threads) => ({
	type: SELECT_ALL,
	threads
});
