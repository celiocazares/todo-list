import { authenticationTypes } from "../actionTypes/authenticationTypes";
import { authenticationHandler } from "../handlers/authenticationHandler";
import { apiHelpers } from "../helpers/apiHelpers";

const login = (params, callback) => {
	return dispatch => {
		dispatch(request());
		authenticationHandler.login(params)
			.then(
				auth => {
					apiHelpers.handleLogin(auth)
					dispatch(success(auth))
					if (callback) callback()
				},
				error => {
					apiHelpers.handleError(error)
					dispatch(failure(error))
				}
			).catch(error => {
				dispatch(failure(error));
			});
	};

	function request() { return { type: authenticationTypes.LOGIN_REQUEST } }
	function success(auth) { return { type: authenticationTypes.LOGIN_SUCCESS, auth } }
	function failure(error) { return { type: authenticationTypes.LOGIN_FAILURE, error } }
}


export const authenticationActions = {
	login,
};
