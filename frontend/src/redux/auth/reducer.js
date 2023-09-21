import * as data from './actionTypes'
const initialState = {
    isAuth: JSON.parse(localStorage.getItem('isAuth')) || false,
    token: JSON.parse(localStorage.getItem('token')) || null,
    isLoading: false,
    isError: false
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case data.LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case data.LOGIN_SUCCESS: {
            localStorage.setItem('isAuth', JSON.stringify(true))
            localStorage.setItem('token', JSON.stringify(payload.token))
            return {
                ...state,
                isAuth: true,
                token: payload.token,
                isLoading: false,
                isError: false
            }
        }
        case data.LOGIN_FAILURE: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        default: return state
    }
}