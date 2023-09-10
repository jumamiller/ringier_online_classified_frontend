import AuthStore from "./src/AuthStore.js";
import AuthRoutes from "./src/AuthRoutes.js";

export default {
    install(app, {store,router}) {
        if (store) {
            store.registerModule("Auth",AuthStore)
        }
        if (router) {
            AuthRoutes.forEach(route => {
                router.addRoute(route)
            })
        }
    }
}