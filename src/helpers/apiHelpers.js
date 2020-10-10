export const apiHelpers = {
	authHeader,
	handleLogin,
	handleStatus,
	handleError
}

function authHeader() {
	let user = JSON.parse(localStorage.getItem('user'));
	debugger
	if (user && user.token) {
		return { 'x-access-token': user.token };
	} else {
		return {};
	}
}

function handleLogin(user) {
	debugger
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
			console.log('error')
			break;
	
		default:
			break;
	}
}