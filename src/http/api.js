import axios from 'axios'

const api = axios.create({
    // @todo Make it in more elegant way.
    baseURL: "http://localhost:8000/api/v1",
    withCredentials: true,
    withXSRFToken: true,
})

export default api