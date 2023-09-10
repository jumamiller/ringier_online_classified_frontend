import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from "./router/index.js";
import listing from "./packages/Listing";
import Auth from "./packages/Auth/index.js";
//landing page

createApp(App)
    .use(Auth,{router,store})
    .use(listing,{router,store})
    .use(router)
    .use(store)
    .mount('#app')
