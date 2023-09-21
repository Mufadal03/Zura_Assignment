import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { reducer as authReducer } from './auth/reducer'
import { reducer as appReducer } from './app/reducer'
import thunk from 'redux-thunk'
const combineReducer = combineReducers({ appReducer, authReducer })
export const store = legacy_createStore(combineReducer, applyMiddleware(thunk))