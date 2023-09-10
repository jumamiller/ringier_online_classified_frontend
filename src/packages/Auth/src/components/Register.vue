<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://www.ringier.com/wp-content/themes/ringiercorporate/assets/images/ringier-logo.svg" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an Account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
          <div class="mt-2">
            <input v-model="formData.name" id="name" name="name" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" v-model="formData.email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
          <div class="mt-2">
            <input v-model="formData.phone_number" id="phone" name="phone" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div class="mt-2">
            <select v-model="formData.country_id" id="country" name="country" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option :value="item.id" v-bind:key="item.id" v-for="item of countries">{{item.name}}</option>
            </select>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input v-model="formData.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button @click="register()" type="button" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{submitting?'Processing...Please Wait':'Create Account'}}</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already Have Account?
        {{ ' ' }}
        <a href="#" @click="$router.push({name:'SignIn'})" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name:"Register",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("PropertyListing/getCountries", {per_page:10,page:1,sort_by:'created_at',order:'desc'});
    });
  },
  data:()=>({
    formData:{
      name:"",
      phone_number:"",
      email:"",
      country_id:"",
      role:"user",
      password:""
    }
  }),
  computed:{
    submitting(){
      return this.$store.getters['Auth/AUTH_GETTER']("submitting")
    },
    countries(){
      return this.$store.getters['PropertyListing/PROPERTY_GETTER']('countries')
    }
  },
  methods:{
    register() {
      this.$store.dispatch("Auth/register",this.formData)
    }
  }
}
</script>