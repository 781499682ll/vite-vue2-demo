import { Message } from 'element-ui'

let isHttpError = false

export const httpErrFun = function (errMes) {
  try {
    const config = errMes.config || {}
    if (config.noAlert || isHttpError) {
      return false
    }
    // 状态码为1xx,3xx,4xx,5xx以及请求超时的时候提示
    let mes = '网络错误，请检查后重试！'
    if (errMes.message.indexOf('timeout') !== -1) {
      mes = '请求超时，请刷新页面或者重新登录！'
    }
    Message({
      showClose: true,
      duration: 3000,
      type: 'error',
      message: mes
    })
    isHttpError = true // 当前已显示错误
    setTimeout(function () {
      isHttpError = false
    }, 1000)
  } catch (error) {
    console.log(error)
  }
}
