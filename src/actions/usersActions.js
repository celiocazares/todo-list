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
          if (callBack) callBack();
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

const insertUser = (params, callback) => {
  return dispatch => {
    dispatch(request());
    usersHandler.insert(params)
      .then(
        user => {
          dispatch(success(user))
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

  function request() { return { type: usersActionTypes.INSERT_REQUEST } }
  function success(user) { return { type: usersActionTypes.INSERT_SUCCESS, user } }
  function failure(error) { return { type: usersActionTypes.INSERT_FAILURE, error } }
}

const updateUser = (params, callback) => {
  return dispatch => {
    dispatch(request());
    usersHandler.update(params)
      .then(
        user => {
          dispatch(success(user))
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

  function request() { return { type: usersActionTypes.UPDATE_REQUEST } }
  function success(user) { return { type: usersActionTypes.UPDATE_SUCCESS, user } }
  function failure(error) { return { type: usersActionTypes.UPDATE_FAILURE, error } }
}

const deleteUser = (id, callback) => {
  return dispatch => {
    dispatch(request());
    usersHandler.deleteUser(id)
      .then(
        user => {
          dispatch(success(user))
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

  function request() { return { type: usersActionTypes.DELETE_REQUEST } }
  function success(user) { return { type: usersActionTypes.DELETE_SUCCESS, user } }
  function failure(error) { return { type: usersActionTypes.DELETE_FAILURE, error } }
}

export const usersActions = {
  fetchUsers,
  fetchUserById,
  insertUser,
  updateUser,
  deleteUser
};


// const addUsers = response => ({
//   type: 'FETCH_USERS',
//   response
// })
