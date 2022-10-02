module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://172.17.0.1:3080',
          changeOrigin: true
        },
      }
    }
  }