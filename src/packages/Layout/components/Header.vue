<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img @click="$router.push({name:'PropertyListing'})" class="h-8 w-auto" src="https://www.ringier.com/wp-content/themes/ringiercorporate/assets/images/ringier-logo.svg" alt="Ringier">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="relative ml-3">
            <div>
              <a href="#" v-if="isLoggedIn" class="text-white">Welcome Back,{{currentUser.name}}!</a>&nbsp;
              <button @click="$router.push({name:'PropertyListingCard'})" class="bg-green-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Create Listing</button>&nbsp;
              <button v-if="isLoggedIn" @click="logout" class="bg-red-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Sign Out</button>&nbsp;
              <button v-if="!isLoggedIn"  @click="$router.push({name:'SignIn'})" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Sign In</button>&nbsp;
              <button v-if='!isLoggedIn' @click="$router.push({name:'Register'})" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Sign Up</button>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Ringier SA</a>
      </div>
    </div>
  </nav>
</template>

<script>
import AuthService from "../../../services/AuthService";

export default {
  name:"Header",
  data:()=>({

  }),
  computed:{
    isLoggedIn(){
      return AuthService.check()
    },
    currentUser(){
      return AuthService.user
    },
  },
  methods:{
    logout(){
      return AuthService.logout()
    }
  }
}
</script>

<style scoped>

</style>