import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import Search from "../views/Search";
import Detail from "../views/Detail";
import AddCartSuccess from "../views/AddCartSuccess";
import shopCart from "../views/ShopCart";
import Pay from "../views/Pay";
import PaySuccess from "../views/PaySuccess";
import Trade from "../views/Trade";
import Center from "../views/Center";

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

  { path: "/shopcart", component: shopCart, name: "ShopCart" },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    name: "AddCartSuccess",
  },
  {
    path: "/pay",
    component: Pay,
    name: "Pay",
  },
  {
    path: "/paySuccess",
    component: PaySuccess,
    name: "PaySuccess",
  },
  {
    path: "/trade",
    component: Trade,
    name: "Trade",
  },
  {
    path: "/center",
    component: Center,
    name: "Center",
  },
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
