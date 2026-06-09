import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const api = axios.create({
    // @todo Make it in more elegant way.
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
})

export default api