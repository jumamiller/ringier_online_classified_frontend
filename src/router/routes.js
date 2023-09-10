export default [
    {
        path: "/",
        redirect: { name: "PropertyListing" },
    },
    //if route not found, redirect to /
    {
        path: "/:pathMatch(.*)*",
        redirect: { name: "PropertyListing" },
    },
];