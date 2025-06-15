import axios from 'axios'
import React from 'react'
import useAuth from './useAuth'


const axiosInstance = axios.create({
    baseURL:'http://localhost:3000'
})
const useAxiosSecure = () => {
    const {user} = useAuth()

    axiosInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${user.accessToken}`
        return config
    })

    // response interceptor
    axiosInstance.interceptors.response.use(response => {
        return response
    }, error => {
        if(error.status === 401){
            console.log('logout the user for 401')
        }
        return Promise.reject(error)
    }
    )
  return axiosInstance
}

export default useAxiosSecure

