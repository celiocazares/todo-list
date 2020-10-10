import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'
import authenticationReducer from './reducers/authenticationReducer'

const reducers = combineReducers({
  usersReducer,
  authenticationReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;