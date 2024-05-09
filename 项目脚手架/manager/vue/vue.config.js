const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8888,
    client: {
      overlay: false
    }
  },
  chainWebpack: config =>{
    config.plugin('html')
        .tap(args => {
          args[0].title = "ShareHub管理系统";
          return args;
        })
  }
})

