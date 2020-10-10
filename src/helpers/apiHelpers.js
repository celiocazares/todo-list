import { message } from 'antd';

export const apiHelpers = {
	authHeader,
	handleLogin,
	handleStatus,
	handleError
}

function authHeader() {
	let user = JSON.parse(localStorage.getItem('user'));
	if (user && user.token) {
		return { 'x-access-token': user.token };
	} else {
		return {};
	}
}

function handleLogin(user) {
	localStorage.setItem('user', JSON.stringify(user.info))

	return user;
}

function handleStatus(response) {
	if (response.ok) {
		return Promise.resolve(response);
	}
	if (response.status === 401 || response.status === 406) {
		return Promise.reject(response);
	}
	return Promise.reject(response.json());
}

function handleError(error) {
	const { status } = error;
	switch (status) {
		case 401:
			message.error('User does not exist')
			break;

		default:
			break;
	}
}