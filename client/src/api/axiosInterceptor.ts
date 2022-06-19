import { Axios } from 'axios'

const addInterceptor = (axios: Axios) =>
  axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('access_token')

    if (accessToken) {
      config.headers = config.headers || {}

      config.headers['Authorization'] = `Token ${accessToken}`
      config.headers['Content-Type'] = 'application/json'
      config.headers['Request-Source'] = 'web'
    }

    return config
  }, Promise.reject)

export default addInterceptor