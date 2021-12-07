import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes"
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        if (!store.state.user.currentUser.id) {
            // if not logged in, redirect to login page.  
            next({ name: 'login' })
        }
        // route requires auth but is logged in, proceed
        next()
    }
    // does not require auth ( always call next() )
    next()
});

export default router;