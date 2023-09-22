import { api } from '../../api'
import * as data from './actionTypes'

export const loginFn = (payload) => async dispatch => {
    dispatch({ type: data.LOGIN_REQUEST })
    try {
        const res = await api.post('/user/login', payload)
        dispatch({ type: data.LOGIN_SUCCESS, payload: res })
    } catch (error) {
        dispatch({ type: data.LOGIN_FAILURE })
    }
}