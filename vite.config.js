import { createVuePlugin } from 'vite-plugin-vue2'
// import { vitePluginCommonjs } from 'vite-plugin-commonjs'
// import { cjs2esmVitePlugin } from 'cjs2esmodule'
const { resolve } = require('path') // 必须要引入resolve

export default {
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 把src改为@
    }
  },
  plugins: [createVuePlugin()],
  css: {
    // css预处理器
    preprocessorOptions: {
      // less: {
      //   additionalData: '@import "./src/assets/css/common.less";'
      // }
    }
  }
}
