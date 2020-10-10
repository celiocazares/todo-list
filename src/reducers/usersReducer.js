import { usersActionTypes } from "../actionTypes/usersActionTypes"

const INITIAL_STATE = {
    usersList: ["teste"]
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case usersActionTypes.FETCH_USERS_REQUEST:
            return { ...state, userLoading: true }
        case usersActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, userLoading: false, usersList: [...state.usersList, action] }
        case usersActionTypes.FETCH_USERS_FAILURE:
            return { ...state, userLoading: false, usersList: [] }
        case 'ADD_USER':
            return { ...state }
        case 'DELETE_USER':
            return { ...state, }
        default:
            return state
    }
}

export default usersReducer