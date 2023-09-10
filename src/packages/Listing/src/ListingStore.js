import ListingConstants from "./ListingConstants.js";
import call from "../../../services/http";
import {toast} from "vue3-toastify";
export default {
    namespaced:true,
    state:{
        properties:[],
        //
        loading:false,
        submitting:false
    },
    getters: {
        PROPERTY_GETTER: state => setup => state[setup],
    },
    mutations: {
        MUTATE: (state, payload) => {
            state[payload.state] = payload.data
        },
    },
    actions:{
        /**
         * Get properties
         * @param commit
         * @param payload
         */
        getProperties({commit},payload) {
            commit("MUTATE", {state: "loading", data: true})
            call('get', ListingConstants.PROPERTY_LISTINGS(payload))
                .then(({data}) => {
                    commit("MUTATE", {state: "loading", data: false})
                    if (data) {
                        commit("MUTATE", {state: "properties", data:data.data.data})
                        commit("MUTATE", {state: "pagination", data:data.data})
                    } else {
                        toast.error(data.message);
                    }
                })
                .catch(error => {
                    commit("MUTATE", {state: "loading", data: false})
                    toast.error(error.response.data.message || 'Something went wrong.');
                });
        },
    }
}