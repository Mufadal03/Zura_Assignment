import axios from "axios";
export const api = axios.create({
    baseURL: 'http://localhost:4000'
})

api.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (err) => {
    throw err.response.data
})
api.interceptors.request.use((configs) => {
    return {
        ...configs,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')) || ""}`
        }
    }
})