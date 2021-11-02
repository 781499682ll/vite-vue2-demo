import axios from 'axios'
import qs from 'qs'
import { httpErrFun } from '@/http/utils.js'
function isFormData (v) {
  return Object.prototype.toString.call(v) === '[object FormData]'
}
// * 创建axios实例
const axiosInstance = axios.create({
  // 测试用，全局params，需要覆盖可以在调用的地方覆盖，不需要可以删除
  params: {},
  timeout: 30000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  paramsSerializer: params => {
    if (isFormData(params)) {
      return params
    }
    return qs.stringify(params)
  },
  transformRequest: (data) => {
    // 请求前对data进行操作
    if (isFormData(data)) {
      return data
    }
    return qs.stringify(data)
  }
})

// * 设置全局请求拦截器
axiosInstance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error.response)
})

// * 设置全局响应拦截器
axiosInstance.interceptors.response.use((response) => {
  return Promise.resolve(response.data)
}, (errMes) => {
  httpErrFun(errMes)
  return Promise.reject(errMes)
})

// * 设置axios实例的baseURL，如果需要修改可以在import实例之后用相同的方法覆盖
// axiosInstance.defaults.baseURL = process.env.API_BASE_URL ? process.env.API_BASE_URL : 'https://v3test228.easywits.com/es/api'

export {
  axiosInstance
}

export default axiosInstance
