import { createWebHistory, createRouter } from "vue-router";
import AuthService from "scaling-garbanzo/src/access-control/AuthService";

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, left: 0 };
        }
    },
});

router.beforeEach(async (to, from, next) => {
    // Check if the route requires authentication
    const requiresAuth = to.matched.some(record => record.meta.authRequired);
    // Check if the user is logged in
    const isLoggedIn = await AuthService.check();
    // If the route requires authentication and the user is not logged in, redirect to the login page
    if (requiresAuth && !isLoggedIn) {
        next({ name: "login", query: { redirect: to.fullPath }});
    } else {
        // If the user is already logged in or the route does not require authentication, proceed with the navigation
        next();
    }
});
//
router.beforeResolve(async (routeTo, routeFrom, next) => {
    try {
        // For each matched route...
        for (const route of routeTo.matched) {
            await new Promise((resolve, reject) => {
                // If a `beforeResolve` hook is defined, call it with
                // the same arguments as the `beforeEnter` hook.
                if (route.meta && route.meta.beforeResolve) {
                    route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
                        // If the user chose to redirect...
                        if (args.length) {
                            // If redirecting to the same route we're coming from...
                            // Complete the redirect.
                            next(...args);
                            reject(new Error('Redirected'));
                        } else {
                            resolve();
                        }
                    });
                } else {
                    // Otherwise, continue resolving the route.
                    resolve();
                }
            });
        }
        // If a `beforeResolve` hook chose to redirect, just return.
    } catch (error) {
        return;
    }
    document.title = routeTo.meta.title || 'Property Classified Ad';
    // If we reach this point, continue resolving the route.
    next();
});

export default router;