const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
      open:true,
      port:'8080',
      proxy:{
        '/api':{
          target:'http://127.0.0.1:8081',
          changeOrigin: true,
          ws:false,
        },
        '/api2':{
          target:'http://101.37.15.192:8082',
          changeOrigin: true,
          ws:false,
        }
      },
  }
})
