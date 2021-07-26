import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import Search from "../views/Search";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/home", name: "Home", component: Home },
  { path: "/search/:keyword?", name: "Search", component: Search },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    //匹配的组件才能在$route中接收meta
    meta: {
      isHideFooter: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
