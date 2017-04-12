import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// DevPerf
// import ReactFeatureFlags from 'react/lib/ReactFeatureFlags';
// ReactFeatureFlags.logTopLevelRenders = true;

import App from './components/App';
import configure from './store';

const initialState = {};
const store = configure(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/">
				<IndexRedirect to="/0/"/>
			</Route>
			<Route path="/:folder" component={App}/>
		</Router>
	</Provider>,

	document.getElementById('root')
);
