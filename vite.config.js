import { createVuePlugin } from 'vite-plugin-vue2'
import { viteMockServe } from 'vite-plugin-mock'
const { resolve } = require('path') // 必须要引入resolve

export default {
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 把src改为@
    }
  },
  plugins: [
    createVuePlugin(),
    viteMockServe({
      mockPath: './src/mock',
      supportTs: false
    })
  ],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        manualChunks (id) { // 代码分离
          if (id.includes('node_modules/echarts')) {
            return 'vendor-c'
          }
          if (id.includes('node_modules/element-ui')) {
            return 'vendor-e'
          }
        }
      }
    }
  },
  css: {
    // // css预处理器
    // preprocessorOptions: {
    //   // less: {
    //   //   additionalData: '@import "./src/assets/css/common.less";'
    //   // }
    // }
  }
}
