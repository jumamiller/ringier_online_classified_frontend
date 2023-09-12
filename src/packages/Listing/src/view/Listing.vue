<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <form>
        <div class="flex">
          <div class="relative w-full">
            <input v-model="query" @keyup="debouncedSearch" type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 white:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for anything..." required>
          </div>
        </div>
      </form>

      <h2 class="text-2xl mt-4 font-bold tracking-tight text-gray-900">{{query?`Search Results For '${query}'`: 'Featured Properties'}}</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div @click="$router.push({name:'PropertyDetailsCard',params:{code:property.slug}})" class="group relative"  v-bind:key="property.id"  v-for="property of properties">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="property?.images[0]?.image_path" alt="Property Image" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#" class="text-danger-300">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{property?.currency?.symbol}}{{ Helper.formatNumber(property?.price) }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ property?.title }}</p>
              <p class="mt-1 text-sm text-gray-400">{{ property?.country?.name }}</p>
            </div>
          </div>
        </div>
        <!-- More products... -->
      </div>
      <button v-if="pagination?.current_page<=pagination?.last_page && (pagination?.total-pagination?.to>0)" @click="loadMore" type="button" class="btn btn-soft-info btn-rounded btn-sm px-2"><i
          class="mdi me-2" :class="loading?'mdi-spin mdi-loading':'mdi-arrow-down'"></i>Load More
      </button>
    </div>
  </div>
</template>
<script>
import {ListingMixin} from "../mixin/ListingMixin.js";
import Helper from "../../../../Utils/Helper.js";

export default {
  name:"PropertyListing",
  computed: {
    Helper() {
      return Helper
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("PropertyListing/getProperties", {per_page:10,page:1,sort_by:'created_at',order:'desc'});
    });
  },
  mixins: [
      ListingMixin
  ],
  data:()=>({
    query:'',
  })
}
</script>

<style scoped>

</style>