import api from "./api";

export const csrfCookie = () => api.get(import.meta.env.VITE_CSRF_COOKIE_PATH)

export const login = (credentials) => api.post('/auth/login', credentials)

export const register = (user) => api.post('/auth/register', user)

export const logout = () => api.post('/auth/logout')

export const getUser = () => api.get('/api/user')