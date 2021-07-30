import Vue from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import router from "./router";
import store from "./store";
import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";
import Dialog from "./components/Dialog";
import Pagination from "./components/Pagination";

//引入mock
import "./mock";

import "./styles/reset.css";
import "./plugins/element.js";
import "./styles/iconfont.css";

Vue.config.productionTip = false;

// 注册全局组件
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.component("Dialog", Dialog);
Vue.component("Pagination", Pagination);

Vue.use(VueLazyload, {
  preload: 1.3,
  loading: require("./assets/images/loading.gif"),
  attemp: 1,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
