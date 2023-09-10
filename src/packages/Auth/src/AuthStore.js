import call from "../../../services/http";
import {toast} from "vue3-toastify";
import AuthConstants from "./AuthConstants.js";
import AuthService from "../../../services/AuthService/index.js";

export default {
    namespaced:true,
    state:{
        submitting:false,
    },
    getters: {
        AUTH_GETTER: state => setup => state[setup],
    },
    mutations: {
        MUTATE: (state, payload) => {
            state[payload.state] = payload.data
        },
    },
    actions:{
        /**
         * @description Login
         * @param commit
         * @param payload
         */
        login({commit},payload) {
            commit("MUTATE", {state: "submitting", data: true})
            call('post', AuthConstants.LOGIN,payload)
                .then(({data}) => {
                    commit("MUTATE", {state: "submitting", data: false})
                    if (data) {
                        toast.success(data.data.message || 'You have successfully logged in')
                        AuthService.login(data.data.token,data.data.account)
                    } else {
                        toast.error(data.message);
                    }
                })
                .catch(error => {
                    commit("MUTATE", {state: "submitting", data: false})
                    toast.error(error.response.data.message || 'Something went wrong.');
                });
        },
        /**
         * @description Register
         * @param commit
         * @param payload
         */
        register({commit},payload) {
            commit("MUTATE", {state: "submitting", data: true})
            call('post', AuthConstants.REGISTER,payload)
                .then(({data}) => {
                    commit("MUTATE", {state: "submitting", data: false})
                    if (data) {
                        toast.success(data.data.message || 'You have successfully created an account')
                        //redirect to login
                        setTimeout(()=>{
                            window.location.href="/auth/sign-in"
                        },3000)
                    } else {
                        toast.error(data.message);
                    }
                })
                .catch(error => {
                    commit("MUTATE", {state: "submitting", data: false})
                    toast.error(error.response.data.message || 'Something went wrong.');
                });
        },
    }
}