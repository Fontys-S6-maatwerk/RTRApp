import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: '/i18n',
        name: 'I18nHome',
        component: () =>
            import ("../views/I18nHome")
    },
    {
        path: '/profile/:id',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue'),
        props: (route) => ({
            userId: route.params.userId,
        }),
    },
    {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/solutions/:id',
        name: 'Solution',
        component: () =>
            import ('../views/Solution.vue')
    },
    {
        path: '/create-solution/:usedId',
        name: 'CreateSolution',
        component: () =>
            import ('../views/CreateSolution.vue'),
        props: (route) => ({
            solutionId: route.params.userId,
        }),

    },
    {
        name: 'login',
        path: '/login',
        component: () =>
            import ('../views/Login.vue'),
    },
    {
        name: 'register',
        path: '/register',
        component: () =>
            import ('../views/Register.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('../views/Search.vue')
    }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
