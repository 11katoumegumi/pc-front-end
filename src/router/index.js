import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Search from "../views/Search";
import Login from "../views/Login";
import Regitser from "../views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/register",
    name: "Regitser",
    component: Regitser,
    meta: {
      isHideFooter: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
