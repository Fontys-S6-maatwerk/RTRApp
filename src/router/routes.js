const routes = [{
        path: "/i18n",
        name: "I18nHome",
        component: () =>
            import ("../views/I18nHome"),
    },
    {
        path: "/profile/:id?",
        name: "Profile",
        component: () =>
            import ("../views/Profile.vue"),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/home",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Home.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/solutions/:id",
        name: "Solution",
        component: () =>
            import ("../views/Solution.vue"),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/create-solution/:solutionId?",
        name: "CreateSolution",
        component: () =>
            import ("../views/CreateSolution.vue"),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: "login",
        path: "/login",
        component: () =>
            import ("../views/Login.vue"),
    },
    {
        name: "register",
        path: "/register",
        component: () =>
            import ("../views/Register.vue"),
    },
    {
        path: "/search",
        name: "Search",
        component: () =>
            import ("../views/Search.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/update-profile",
        name: "UpdateProfile",
        component: () =>
            import ("../views/UpdateProfile.vue"),
        meta: {
            requiresAuth: true
        }
    },
];

export default routes;