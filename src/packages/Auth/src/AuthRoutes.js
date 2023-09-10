import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

export default [
    {
        path:"/auth/sign-in",
        name:"SignIn",
        component: Login,
        meta: {
            title: "Sign In",
            authRequired: false
        },
    },
    {
        path:"/auth/create-account",
        name:"Register",
        component: Register,
        meta: {
            title: "Create an Account",
            authRequired: false
        },
    },
]