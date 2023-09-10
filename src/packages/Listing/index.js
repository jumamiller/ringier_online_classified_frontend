import ListingStore from "./src/ListingStore.js";
import ListingRoutes from "./src/ListingRoutes.js";

export default {
    install(app, {store,router}) {
        if (store) {
            store.registerModule("PropertyListing",ListingStore)
        }
        if (router) {
            ListingRoutes.forEach(route => {
                router.addRoute(route)
            })
        }
    }
}