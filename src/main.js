import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";

//引入mock
import "./mock";

import "./styles/reset.css";
import "./plugins/element.js";
import "./styles/iconfont.css";

Vue.config.productionTip = false;

// 注册全局组件
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
