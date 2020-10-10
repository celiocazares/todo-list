import { authenticationTypes } from "../actionTypes/authenticationTypes";
import { authenticationHandler } from "../handlers/authenticationHandler";
import { apiHelpers } from "../helpers/apiHelpers";

const login = (params, callback) => {
	return dispatch => {
		dispatch(request());
		authenticationHandler.login(params)
			.then(
				users => {
					apiHelpers.handleLogin(users)
					dispatch(success(users))
					if (callback) callback()
				},
				error => apiHelpers.handleError(error)
			).catch(error => {
				dispatch(failure(error));
			});
	};

	function request() { return { type: authenticationTypes.LOGIN_REQUEST } }
	function success(users) { return { type: authenticationTypes.LOGIN_SUCCESS, users } }
	function failure(error) { return { type: authenticationTypes.LOGIN_FAILURE, error } }
}


export const authenticationActions = {
	login,
};
