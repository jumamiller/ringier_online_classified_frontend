import ListingConstants from "./ListingConstants.js";
import call from "../../../services/http";
import {toast} from "vue3-toastify";
import Helper from "../../../Utils/Helper.js";
import router from "../../../router/index.js";
export default {
    namespaced:true,
    state:{
        properties:[],
        property:{},
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
         * Get property
         * @param commit
         * @param payload
         */
        getProperty({commit},payload) {
            commit("MUTATE", {state: "loading", data: true})
            call('get', ListingConstants.CREATE_PROPERTY+`/${payload.slug}`)
                .then(({data}) => {
                    commit("MUTATE", {state: "loading", data: false})
                    if (data) {
                        commit("MUTATE", {state: "property", data:data.data})
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
                        setTimeout(()=>{
                            router.push({name:"PropertyImageUploadCard",params:{code:data.data.slug}})
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
        /**
         * @description save image
         * @param commit
         * @param dispatch
         * @param payload
         */
        savePropertyImage({commit,dispatch},payload) {
            commit("MUTATE", {state: "submitting", data: true})
            call('post', ListingConstants.UPLOAD_IMAGES,payload)
                .then(({data}) => {
                    commit("MUTATE", {state: "submitting", data: false})
                    if (data) {
                        toast.success(data.data.message || 'You have successfully uploaded images')
                        dispatch("getProperty",{slug:payload.slug})
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