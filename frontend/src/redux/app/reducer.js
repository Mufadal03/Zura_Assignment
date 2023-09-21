import * as data from './actionTypes'
const initialState = {
    projects: [],
    isLoading: false,
    isError: false
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case data.GET_PROJECT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case data.GET_PROJECT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                projects: [...payload]
            }
        }
        case data.GET_PROJECT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        default: return state
    }
}