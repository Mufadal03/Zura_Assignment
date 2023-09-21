import { api } from '../../api'
import * as data from './actionTypes'
export const getProjects = () => async dispatch => {
    dispatch({ type: data.GET_PROJECT_REQUEST })
    try {
        const projects = await api.get('/project')
        dispatch({ type: data.GET_PROJECT_SUCCESS, payload: projects.response })
    } catch (error) {
        dispatch({ type: data.GET_PROJECT_FAILURE })
        console.log(error)

    }
}

