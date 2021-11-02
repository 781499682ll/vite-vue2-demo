// 仅做示例: 通过GET请求返回一个名字数组
export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: ['tom', 'jerry']
      }
    }
  }
]
