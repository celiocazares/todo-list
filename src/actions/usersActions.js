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

const fetchUserById = (id, callBack) => {
  return dispatch => {
    dispatch(request());
    usersHandler.getById(id)
      .then(
        user => {
          dispatch(success(user));
          if(callBack) callBack();
        },
        error => apiHelpers.handleError(error)
      ).catch(error => {
        dispatch(failure(error));
      });
  };

  function request() { return { type: usersActionTypes.FETCH_USER_BY_ID_REQUEST } }
  function success(user) { return { type: usersActionTypes.FETCH_USER_BY_ID_SUCCESS, user } }
  function failure(error) { return { type: usersActionTypes.FETCH_USER_BY_ID_FAILURE, error } }
}

const addUsers = response => ({
  type: 'ADD_USER',
  response
})

export const usersActions = {
  fetchUsers,
  fetchUserById,
  addUsers
};


// const addUsers = response => ({
//   type: 'FETCH_USERS',
//   response
// })
