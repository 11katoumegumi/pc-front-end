import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import generateUserTempId from "../util/userTempId";
import store from "../store";
// import { Message } from "element-ui";
nProgress.configure({ showSpinner: false });

// 创建axios实例
const instance = axios.create({
  baseURL: "/api", //基础地址
  headers: {}, //设置请求头
  timeout: 10000, //设置超时请求
});
/* 
    流程：
        1.触发请求拦截器回调 
        2.发送请求
        3.触发响应拦截器回调

    原理：
        Promise.resolve()
            .then(请求拦截器成功回调，请求拦截器失败回调)
            .then(发送请求，undefined)
            .then(响应拦截器成功回调，响应拦截器失败回调)
*/
const errorMessages = {
  401: "权限不足",
  403: "禁止访问",
  404: "资源不存在",
  500: "服务器错误",
};

// 设置请求拦截器 参数一：请求拦截成功回调，接收config作为参数  参数二：请求拦截失败回调
instance.interceptors.request.use((config) => {
  nProgress.start(); //加载开始
  //设置请求头
  config.headers.userTempId = generateUserTempId();
  config.headers.token = store.state.user.token;
  //config.headers.xxx = "xxx";
  //必须返回config对象,后续发送请求
  return config;
});

// 设置响应拦截器 参数一：响应成功回到，接收响应参数  响应失败回调，接收error参数
instance.interceptors.response.use(
  //响应成功
  (response) => {
    nProgress.done(); //加载结束
    if (response.data.code === 200) {
      // 返回需要的数据
      return response.data.data;
    }

    const message = response.data.message || "未知错我，联系10086";
    // 返回错误的promise
    return Promise.reject(message);
  },
  //响应失败
  (error) => {
    nProgress.done();
    /* 响应失败的回调,非200失败 */
    /* 500 400 断网 网速太慢(超时) */
    /* 5.错误提示更加准确 */
    let message = "未知错误,请求管理员";

    if (error.response) {
      // repsonse有值，说明响应回来了，有响应状态码
      // if (error.response.status === 404) {
      //   message = "资源找不到";
      // } else if (error.response.status === 401) {
      //   message = "没有权限访问";
      // } else if (error.response.status === 403) {
      //   message = "禁止访问";
      // } else if (error.response.status === 500) {
      //   message = "服务器故障";
      // }
      message = errorMessages[error.response.status];
    } else {
      //response没有值,则说明断网或者网速太慢,没有响应回来
      if (error.message.indexOf("Network Error") > -1) {
        message = "网络断开链接，请打开网络链接试试";
      } else if (error.message.indexOf("timeout") > -1) {
        message = "网速太慢了，打开4G网或连接WIFI试试";
      }
    }

    alert(message);
    return Promise.reject(message);
  }
);

export default instance;
