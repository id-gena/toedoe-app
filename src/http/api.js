import axios from 'axios'

const api = axios.create({
    // @todo Make it in more elegant way.
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
})

export default api