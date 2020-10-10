import { prefixApi } from '../helpers/prefixApi';
import { apiHelpers } from '../helpers/apiHelpers';

export const authenticationHandler = {
    login,
    logout
};

function login(params) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    return fetch(prefixApi() + '/login', requestOptions).then(apiHelpers.handleStatus).then(response => response.json());
}

function logout(params) {
    const requestOptions = {
        method: 'POST',
        headers: { ...apiHelpers.authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    return fetch(prefixApi() + '/logout', requestOptions).then(response => response.json());
}