import { authenticationTypes } from "../actionTypes/authenticationTypes"

const INITIAL_STATE = {loginLoading: false}

const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authenticationTypes.LOGIN_REQUEST:
            return { ...state, loginLoading: true }
        case authenticationTypes.LOGIN_SUCCESS:
            return { ...state, loginLoading: false }
        case authenticationTypes.LOGIN_FAILURE:
            return { ...state, loginLoading: false }
        default:
            return state
    }
}

export default authenticationReducer