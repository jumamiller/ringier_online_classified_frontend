<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Add Listing</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Are you looking to sell more? Ringier is the place for you! </p>
    </div>
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="category" class="block text-sm font-semibold leading-6 text-gray-900">Category</label>
          <div class="mt-2.5">
            <select v-model="formData.category_id" id="category" class="block rounded-md border-0 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Choose a category</option>
              <option :value="item.id" v-for="item of categories">{{item.name}}</option>
            </select>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="title" class="block text-sm font-semibold leading-6 text-gray-900">Title</label>
          <div class="mt-2.5">
            <input v-model="formData.title" type="text" name="last-name" id="last-name" autocomplete="title-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="location" class="block text-sm font-semibold leading-6 text-gray-900">Location</label>
          <div class="mt-2.5">
            <select v-model="formData.country_id" id="location" class="block rounded-md border-0 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Choose location</option>
              <option :value="item.id" v-for="item of countries">{{item.name}}</option>
            </select>
          </div>
        </div>
        <div>
          <label for="title" class="block text-sm font-semibold leading-6 text-gray-900">Price</label>
          <div class="mt-2.5">
            <input v-model="formData.price" type="number" name="price" id="last-name" autocomplete="title-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="location" class="block text-sm font-semibold leading-6 text-gray-900">Currency</label>
          <div class="mt-2.5">
            <select v-model="formData.currency_id" id="location" class="block rounded-md border-0 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Choose currency</option>
              <option :value="item.id" v-for="item of currencies">{{item.name}}</option>
            </select>
          </div>
        </div>
        <div>
          <label for="title" class="block text-sm font-semibold leading-6 text-gray-900">Type</label>
          <div class="mt-2.5">
            <select v-model="formData.type" id="location" class="block rounded-md border-0 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Choose Property Type</option>
              <option :value="item.id" v-for="item of propertyTypes">{{item.name}}</option>
            </select>
          </div>
        </div>
        <div>
          <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Number of Bedrooms</label>
          <div class="mt-2.5">
            <input v-model="formData.bedrooms" type="number" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="bathrooms" class="block text-sm font-semibold leading-6 text-gray-900">Number of Bathrooms</label>
          <div class="mt-2.5">
            <input v-model="formData.bathrooms" type="number" name="bathrooms" id="bathrooms" autocomplete="bathrooms" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="why_buy" class="block text-sm font-semibold leading-6 text-gray-900">Why Buy?</label>
          <div class="mt-2.5">
            <textarea v-model="formData.why_buy" name="why_buy" id="why_buy" rows="2" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="overview" class="block text-sm font-semibold leading-6 text-gray-900">Property Overview</label>
          <div class="mt-2.5">
            <textarea v-model="formData.overview" name="overview" id="overview" rows="2" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="description" class="block text-sm font-semibold leading-6 text-gray-900">Description</label>
          <div class="mt-2.5">
            <textarea v-model="formData.description" name="description" id="description" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch v-model="formData.pool" :class="[formData.pool ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
              <span class="sr-only">Has Pool</span>
              <span aria-hidden="true" :class="[formData.pool ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            Has Pool?
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button @click="save" type="button" class="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{submitting? 'Processing...Please wait':'Submit'}}</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import {ListingMixin} from "../mixin/ListingMixin.js";

const agreed = ref(false)

export default {
  name:"PropertyListingCard",
  components:{
    ChevronDownIcon,
    Switch,
    SwitchGroup,
    SwitchLabel
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("PropertyListing/getCategories", {per_page:20,page:1,sort_by:'created_at',order:'desc'});
      vm.$store.dispatch("PropertyListing/getCountries", {per_page:20,page:1,sort_by:'created_at',order:'desc'});
      vm.$store.dispatch("PropertyListing/getCurrencies", {per_page:20,page:1,sort_by:'created_at',order:'desc'});
    });
  },
  mixins:[
      ListingMixin
  ],
  data:()=>({
    formData:{
      category_id: "",
      title: "",
      description: "",
      country_id: "",
      type: "",
      currency_id: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      pool: false,
      overview: "",
      why_buy: "",
    }
  }),
  computed:{

  }
}
</script>