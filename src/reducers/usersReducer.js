import { usersActionTypes } from "../actionTypes/usersActionTypes"

const INITIAL_STATE = {
    usersList: [],
    user: null
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.FETCH_USERS_REQUEST:
            return { ...state, usersLoading: true }
        case usersActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, usersLoading: false, usersList: action.users.users }
        case usersActionTypes.FETCH_USERS_FAILURE:
            return { ...state, usersLoading: false, usersList: [] }
        case usersActionTypes.FETCH_USER_BY_ID_REQUEST:
            return { ...state, userLoading: true }
        case usersActionTypes.FETCH_USER_BY_ID_SUCCESS:
            return { ...state, userLoading: false, user: action.user.user }
        case usersActionTypes.FETCH_USER_BY_ID_FAILURE:
            return { ...state, userLoading: false, user: [] }
        case 'ADD_USER':
            return { ...state }
        case 'DELETE_USER':
            return { ...state, }
        default:
            return state
    }
}

export default usersReducer