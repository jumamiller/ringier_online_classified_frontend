import call from "../../../services/http";
import {toast} from "vue3-toastify";
import AuthConstants from "./AuthConstants.js";

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
        login({commit}) {
            commit("MUTATE", {state: "submitting", data: true})
            call('get', AuthConstants.LOGIN)
                .then(({data}) => {
                    commit("MUTATE", {state: "submitting", data: false})
                    if (data) {
                        toast.success(data.data.message || 'You have successfully logged in')
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
        register({commit}) {
            commit("MUTATE", {state: "submitting", data: true})
            call('get', AuthConstants.REGISTER)
                .then(({data}) => {
                    commit("MUTATE", {state: "submitting", data: false})
                    if (data) {
                        toast.success(data.data.message || 'You have successfully created an account')
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