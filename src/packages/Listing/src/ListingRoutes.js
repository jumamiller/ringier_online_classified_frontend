import Listing from "./view/Listing.vue";
import PropertyListingCard from "./components/PropertyListingCard.vue";

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
    {
        path: "/listings/card",
        name: "PropertyListingCard",
        meta: {
            title: "Create Listing",
            authRequired: true
        },
        component: PropertyListingCard,
    },

]