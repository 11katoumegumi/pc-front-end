module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
        changeOrigin: true,
        // 请求地址需要/api
        // pathRewrite: {
        //   "^/api": "",
        // },
      },
    },
  },
};
