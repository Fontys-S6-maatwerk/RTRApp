import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import I18nHome from "../views/I18nHome";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/i18n',
        name: 'I18nHome',
        component: I18nHome
    },
    {
        path: '/profile/:author',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue'),
        props: (route) => ({
            author: route.params.author,
        }),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/solutions',
        name: 'Solutions',
        component: () =>
            import ('../views/Solutions.vue')
    },
    {
        path: '/solutions/:solutionId',
        name: 'Solution',
        component: () =>
            import ('../views/Solution.vue')
    },
    {
        path: '/create-solution/:id?',
        name: 'CreateSolution',
        component: () =>
            import ('../views/CreateSolution.vue'),
        props: (route) => ({
            solutionId: +route.params.id,
        }),

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router