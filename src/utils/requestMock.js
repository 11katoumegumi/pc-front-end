/* 
  对axios进行封装,完成以下功能
    1. 增加请求地址公共前缀 /api (baseURL)
    2. 增加请求公共函数 token,userTempId
    3. 发送请求try里面就是功能成功,catch功能失败或请求失败
    4. 统一进行错误提示
    5. 错误提示更加准确
    6. 请求进度
*/

import axios from "axios";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

const errorMessages = {
  401: "没有权限访问",
  403: "禁止访问",
  404: "资源找不到",
  500: "服务器故障",
};

const request = axios.create({
  /* 公共前缀 */
  baseURL: "/mock",
  /* 公共请求头 */
  header: {},
  /* 请求超时时间,超过10s就会中断 */
  timeout: 10000,
});

/* 
  设置请求拦截器(中间件函数)

  当你使用request去发送请求时,流程:
    1. 先触发请求拦截器设置的回调函数
    2. 发送请求
    3. 触发响应式拦截器设置回调函数
    4. async await/then/catch/try catch

    Promise.resove()
      .then(
        请求拦截器成功回调,请求拦截器失败回调
      )
      .then(
        发送请求的代码,undefined
      )
      .then(
        响应拦截器成功回调,响应拦截器失败回调
      )

      外面使用时 request().then().catch()
        then方法功能成功
        catch方法功能失败或请求失败
*/

//请求拦截器

request.interceptors.request.use((config) => {
  //响应成功的回调
  //config就是请求的配置对象{method,url,body,params,...}
  // 增加公共的请求参数
  //config.headers.token = "";
  NProgress.start();
  return config;
});

request.interceptors.response.use(
  (response) => {
    NProgress.done();
    /* 响应成功的回调 */
    /* 请求成功则直接返回数据不需要.data */
    if (response.data.code === 200) {
      return response.data;
    }

    /* 4.统一进行错误提示 */
    const message = response.data.message || "未知错误";
    alert(message);
    return Promise.reject(message);
  },
  (error) => {
    NProgress.done();
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
export default request;
