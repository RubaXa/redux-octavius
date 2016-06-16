import {createStore, applyMiddleware} from 'redux';

import middlewares from '../middleware';
import rootReducer from '../reducers';

export default function configure(initialState) {
	const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;

	const createStoreWithMiddleware = applyMiddleware(...middlewares)(create);
	const store = createStoreWithMiddleware(rootReducer, initialState);

	if (module.hot) {
		module.hot.accept('../reducers/index', () => {
			const nextReducer = require('../reducers/index').default;
			store.replaceReducer(nextReducer)
		});
	}

	return store;
}
