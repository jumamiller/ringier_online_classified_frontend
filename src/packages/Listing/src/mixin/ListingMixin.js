import Helper from "../../../../Utils/Helper.js";

export const ListingMixin={
    computed:{
        loading(){
            return this.$store.getters['PropertyListing/PROPERTY_GETTER']("loading")
        },
        submitting(){
            return this.$store.getters['PropertyListing/PROPERTY_GETTER']("submitting")
        },
        inquirySent(){
            return this.$store.getters['PropertyListing/PROPERTY_GETTER']("inquirySent")
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
        },
        property(){
            return this.$store.getters['PropertyListing/PROPERTY_GETTER']("property")
        }
    },
    methods:{
        /**
         * Save
         */
        save() {
            this.$store.dispatch("PropertyListing/saveProperty",this.formData)
        },
        /**
         * Upload base64 image
         * @param files
         */
        async uploadBase64Image(files) {
            this.formData.image = await Helper.uploadBase64Image(files[0])
            this.formData.property_id=this.property.id
            this.formData.slug=this.property.slug
            this.$store.dispatch("PropertyListing/savePropertyImage",this.formData)
        },
        /**
         * Remove image
         * @param image
         */
        removePropertyImage(image){
            this.$store.dispatch("PropertyListing/removePropertyImage", {
                id:image.id,
                slug:this.property.slug,
            })
        },
        sendInquiry(){
            this.formData.property_id=this.property.id
            this.$store.dispatch("PropertyListing/sendInquiry",this.formData)
        }
    }
}