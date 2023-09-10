import Listing from "./view/Listing.vue";

export default [
    {
        path: "/listings",
        name: "PropertyListing",
        meta: {
            title: "Property Listings",
            authRequired: false
        },
        component: Listing,
    },
]