import thunk from 'redux-thunk';
import api from './api';
import logger from './logger';

import { browserHistory } from 'react-router';
import {routerMiddleware as routing} from 'react-router-redux';

export default [
	routing(browserHistory),
	thunk,
	api,
	// logger,
];
