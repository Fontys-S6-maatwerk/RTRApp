import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/i18n",
    name: "I18nHome",
    component: () => import("../views/I18nHome"),
  },
  {
    path: "/profile/:id",
    name: "Profile",
    props: true,
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/solutions/:id",
    name: "Solution",
    props: true,
    component: () => import("../views/Solution.vue"),
  },
  {
    path: "/create-solution/:id?",
    name: "CreateSolution",
    component: () => import("../views/CreateSolution.vue"),
    props: (route) => ({
      solutionId: +route.params.id,
    }),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
