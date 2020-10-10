import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/usersReducer'

const reducers = combineReducers({
  usersReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;