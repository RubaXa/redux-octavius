import {THREADS_STATUS_MEETHOD} from '../constants/api';
import {STATUS_FETCH, STATUS_FETCH_SUCCESS, STATUS_FETCH_FAIL} from '../constants/status';

export const fetchStatus = (folder) => ({
	api: THREADS_STATUS_MEETHOD,
	data: {
		folder: folder|0,
		limit: 100,
		last_modified: 1
	},
	types: [STATUS_FETCH, STATUS_FETCH_SUCCESS, STATUS_FETCH_FAIL],
});
