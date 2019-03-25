import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
export default router;
