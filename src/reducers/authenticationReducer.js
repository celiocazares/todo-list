import { authenticationTypes } from "../actionTypes/authenticationTypes"

const INITIAL_STATE = {}

const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authenticationTypes.LOGIN_REQUEST:
            debugger
            return { ...state, loginLoading: true }
        case authenticationTypes.LOGIN_SUCCESS:
            debugger
            return { ...state, loginLoading: false }
        case authenticationTypes.LOGIN_FAILURE:
            debugger
            return { ...state, loginLoading: false }
        default:
            return state
    }
}

export default authenticationReducer