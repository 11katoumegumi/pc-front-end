import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import Search from "../views/Search";
import Detail from "../views/Detail";
import shopCart from "../views/ShopCart";

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
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },

  { path: "/addcartsuccess", component: shopCart, name: "ShopCart" },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
