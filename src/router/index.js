import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/i18n',
        name: 'I18nHome',
        component: () =>
            import ("../views/I18nHome")
    },
    {
        path: '/profile/:userId',
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