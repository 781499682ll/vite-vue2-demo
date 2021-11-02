import instance from '@/http/config'
const api = {
  // mock test
  getUsers: (params) => instance({
    method: 'get',
    params: params,
    url: '/api/getUsers'
  })
}
export default api
