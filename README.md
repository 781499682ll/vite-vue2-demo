# 技术栈
* 编程语言：JavaScript  
* 构建工具：Vite 2.x  
* 前端框架：Vue 2.x  
* 路由工具：Vue Router 3.x  
* 状态管理：Vuex 3.x  
* UI 框架：Element  
* CSS 预编译：Less  
* HTTP 工具：Axios  
* Git Hook 工具：husky + lint-staged  
* 代码规范：ESLint  
* 提交规范：Commitizen + Commitlint

# 组件
* dataV (由于dataV基于commonJs处理，所以只能使用部分组件)
* v-charts

# mock
* mock插件：vite-plugin-mock
* 使用方法：在src/mock/index中按以下格式新增即可
```js
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
```
```js
// mock test
  getUsers: (params) => instance({
    method: 'get',
    params: params,
    url: '/api/getUsers'
  })

// send request
this.$axios.getUsers()
  .then((res) => {
    console.log(res)
  })
  .catch(() => {})
```
