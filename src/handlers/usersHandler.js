import { prefixApi } from '../helpers/prefixApi';
import { apiHelpers } from '../helpers/apiHelpers';

export const usersHandler = {
    getAll,
    add
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: apiHelpers.authHeader()
    };
    return fetch(prefixApi() + '/user', requestOptions).then(response => response.json());
}

function add(params) {
	const requestOptions = {
		method: 'POST',
		headers: { ...apiHelpers.authHeader(), 'Content-Type': 'application/json' },
		body: JSON.stringify(params)
	};
	return fetch(prefixApi() + '/user', requestOptions).then(response => response.json());
}