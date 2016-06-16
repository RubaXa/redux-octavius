import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

import auth from './auth';
import folders from './folders';
import threads from './threads';

export default combineReducers({
	routing,
	auth,
	folders,
	threads,
});
