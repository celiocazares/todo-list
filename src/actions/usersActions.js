import { usersActionTypes } from "../actionTypes/usersActionTypes";
import { usersHandler } from "../handlers/usersHandler";
import { apiHelpers } from "../helpers/apiHelpers";

const fetchUsers = () => {
  return dispatch => {
    dispatch(request());
    usersHandler.getAll()
      .then(
        users => dispatch(success(users)),
        error => apiHelpers.handleError(error)
      ).catch(error => {
        dispatch(failure(error));
      });
  };

  function request() { return { type: usersActionTypes.FETCH_USERS_REQUEST } }
  function success(users) { return { type: usersActionTypes.FETCH_USERS_SUCCESS, users } }
  function failure(error) { return { type: usersActionTypes.FETCH_USERS_FAILURE, error } }
}

const addUsers = response => ({
  type: 'ADD_USER',
  response
})

export const usersActions = {
  fetchUsers,
  addUsers
};


// const addUsers = response => ({
//   type: 'FETCH_USERS',
//   response
// })
