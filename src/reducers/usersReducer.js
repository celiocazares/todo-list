import { usersActionTypes } from "../actionTypes/usersActionTypes"

const INITIAL_STATE = {
    usersList: [],
    user: null
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // GET ALL
        case usersActionTypes.FETCH_USERS_REQUEST:
            return { ...state, usersLoading: true }
        case usersActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, usersLoading: false, usersList: action.users.users }
        case usersActionTypes.FETCH_USERS_FAILURE:
            return { ...state, usersLoading: false, usersList: [] }
        //BY ID
        case usersActionTypes.FETCH_USER_BY_ID_REQUEST:
            return { ...state, userLoading: true }
        case usersActionTypes.FETCH_USER_BY_ID_SUCCESS:
            debugger
            return { ...state, userLoading: false, user: action.user.user }
        case usersActionTypes.FETCH_USER_BY_ID_FAILURE:
            return { ...state, userLoading: false, user: [] }
        // UPDATE
        case usersActionTypes.UPDATE_REQUEST:
            return { ...state, usersLoading: true }
        case usersActionTypes.UPDATE_SUCCESS:
            debugger
            return { ...state, usersLoading: false, user: action.user.user }
        case usersActionTypes.UPDATE_FAILURE:
            return { ...state, usersLoading: false, user: [] }
        // INSERT
        case usersActionTypes.INSERT_REQUEST:
            return { ...state, usersLoading: true }
        case usersActionTypes.INSERT_SUCCESS:
            debugger
            return { ...state, usersLoading: false, user: action.user.user }
        case usersActionTypes.INSERT_FAILURE:
            return { ...state, usersLoading: false, user: [] }
        // DELETE
        case usersActionTypes.DELETE_REQUEST:
            return { ...state, usersLoading: true }
        case usersActionTypes.DELETE_SUCCESS:
            return { ...state, usersLoading: false, user: action.user.user }
        case usersActionTypes.DELETE_FAILURE:
            return { ...state, usersLoading: false, user: [] }
        default:
            return state
    }
}

export default usersReducer