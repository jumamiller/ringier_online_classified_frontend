export const ListingMixin={
    computed:{
        submitting(){
            return this.$store.getters['PropertyListing/PROPERTY_GETTER']("submitting")
        },
        categories(){
            return this.$store.getters['PropertyListing/PROPERTY_GETTER']('categories')
        },
        countries(){
            return this.$store.getters['PropertyListing/PROPERTY_GETTER']("countries")
        },
        currencies(){
            return this.$store.getters['PropertyListing/PROPERTY_GETTER']("currencies")
        },
        propertyTypes(){
            return [
                {
                    id:"SALE",
                    name:"SALE",
                },
                {
                    id:"RENT",
                    name:"RENT",
                },
            ]
        }
    },
    methods:{
        save() {
            this.$store.dispatch("PropertyListing/saveProperty",this.formData)
        }
    }
}