import ListingConstants from "./ListingConstants.js";
import call from "../../../services/http";
import {toast} from "vue3-toastify";
export default {
    namespaced:true,
    state:{
        properties:[],
        countries:[],
        categories:[],
        currencies:[],
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
        /**
         * @description save property
         * @param commit
         * @param dispatch
         * @param payload
         */
        saveProperty({commit,dispatch},payload) {
            commit("MUTATE", {state: "submitting", data: true})
            call('post', ListingConstants.CREATE_PROPERTY,payload)
                .then(({data}) => {
                    commit("MUTATE", {state: "submitting", data: false})
                    if (data) {
                        toast.success(data.data.message || 'You have successfully created a property')
                        dispatch("getProperties",{})
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
         * Get countries
         * @param commit
         * @param payload
         */
        getCountries({commit},payload) {
            commit("MUTATE", {state: "loading", data: true})
            call('get', ListingConstants.COUNTRIES(payload))
                .then(({data}) => {
                    commit("MUTATE", {state: "loading", data: false})
                    if (data) {
                        commit("MUTATE", {state: "countries", data:data.data.data})
                    } else {
                        toast.error(data.message);
                    }
                })
                .catch(error => {
                    commit("MUTATE", {state: "loading", data: false})
                    toast.error(error.response.data.message || 'Something went wrong.');
                });
        },
        /**
         * Get categories
         * @param commit
         * @param payload
         */
        getCategories({commit},payload) {
            commit("MUTATE", {state: "loading", data: true})
            call('get', ListingConstants.CATEGORIES(payload))
                .then(({data}) => {
                    commit("MUTATE", {state: "loading", data: false})
                    if (data) {
                        commit("MUTATE", {state: "categories", data:data.data.data})
                    } else {
                        toast.error(data.message);
                    }
                })
                .catch(error => {
                    commit("MUTATE", {state: "loading", data: false})
                    toast.error(error.response.data.message || 'Something went wrong.');
                });
        },
        /**
         * Get categories
         * @param commit
         * @param payload
         */
        getCurrencies({commit},payload) {
            commit("MUTATE", {state: "loading", data: true})
            call('get', ListingConstants.CURRENCIES(payload))
                .then(({data}) => {
                    commit("MUTATE", {state: "loading", data: false})
                    if (data) {
                        commit("MUTATE", {state: "currencies", data:data.data.data})
                    } else {
                        toast.error(data.message);
                    }
                })
                .catch(error => {
                    commit("MUTATE", {state: "loading", data: false})
                    toast.error(error.response.data.message || 'Something went wrong.');
                });
        },
    },
}