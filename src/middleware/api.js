function processingAPIResponse(response) {
	if (response.status !== 200) {
		return Promise.reject(response);
	} else {
		return response.body;
	}
}

function call(method, data = {}, auth = {}) {
	const params = new URLSearchParams();

	data.email = data.email || auth.email;
	data.htmlencoded = false;
	//data.token = auth.token;

	Object.keys(data).forEach(name => {
		params.append(name, data[name]);
	});

	return fetch(`http://localhost:3000/api/v1/${method}?${params.toString()}`, {
		method: 'POST',
		credentials: 'include'
	})
		.then(response => response.json())
		.then(processingAPIResponse, processingAPIResponse)
	;
}

export default ({dispatch, getState}) => next => action => {
	const {api, types, data, ...rest} = action;

	if (!(api && types)) {
		return next(action);
	}

	const [REQUEST, SUCCESS, FAIL] = types;

	next({...rest, type: REQUEST, api, data});

	return call(api, data, getState().auth)
		.then(
			(result) => next({...rest, result, type: SUCCESS, api, data}),
			(error) => next({...rest, error, type: FAIL, api, data})
		).catch((error) => {
			console.error('MIDDLEWARE ERROR:', error, api, data);
			next({...rest, error, type: FAIL});
		});
};
