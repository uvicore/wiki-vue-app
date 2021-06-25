<template>

  <Layout>

    <template v-slot:header-logo>
      <div @click="changeRoute('/')" class="flex-shrink-0 flex items-center">
        <img class="block lg:hidden h-8 w-auto" src="@/assets/images/logo.png" alt="Workflow" />
        <img class="hidden lg:block h-8 w-auto" src="@/assets/images/logo.png" alt="Workflow" />
      </div>
    </template>

    <template v-slot:header-left-items>
      <SpacesNav/>
    </template>

    <template v-slot:header-right-items>
      <SearchBox/>
    </template>

    <template v-slot:header-tasktray>
      <button class="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span class="sr-only">View notifications</span>
        <BellIcon class="h-6 w-6" aria-hidden="true" />
      </button>

      <!-- Profile dropdown -->
      <button @click="login" v-if="!user.authenticated">Login</button>
      <!-- <button @click="logout" v-if="user.authenticated">Logout</button> -->
      <!-- <button @click="login">Login</button> -->
      <Menu v-if="user.authenticated" as="div" class="ml-4 relative flex-shrink-0">
        <div>
          <MenuButton class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full" src="@/assets/images/anonymous.png" alt="user" />
          </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" @click="logout" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </template>

    <template v-slot:body-sidenav>
      <PostsNav/>
    </template>

  </Layout>

</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'
//import Header from './components/layout/Header.vue'
//import Header from '@/components/layout/Header.vue'
import Layout from '@uvicore/vue3/layouts/basic/Layout.vue'
//import Header from './components/layout/Header.vue'
//import { BellIcon } from '@heroicons/vue/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import SpacesNav from '@/widgets/SpacesNav.vue'
import SearchBox from '@/widgets/SearchBox.vue'
import PostsNav from '@/widgets/PostsNav.vue'
import { useRouter } from 'vue-router';
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/vue/outline'

import { useUserStore } from '@uvicore/vue3/auth/store';

//import { auth } from './auth';
//import { auth } from '@/uvicore/auth/adapters/oidc';

export default defineComponent({
  name: 'App',
  components: {
    // App Components
    //HelloWorld
    //Header,
    Layout,
    SpacesNav,
    SearchBox,
    PostsNav,

    // Headless UI Components
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,

    // Hero Icons
    BellIcon,

    //Header,
  },



  setup() {
    // Get router
    const router = useRouter();

    const user = useUserStore();
    console.log('USER: ', user);
    console.log('USER: ', user.authenticated);

    function changeRoute(route: string) {
      router.push(route);
    }

    function login() {
      console.log('Login click');
      //auth.signIn();
      //auth.login();
      user.login();
    }

    function logout() {
      console.log('Logout click');
      user.logout()
    }

    return {
      changeRoute,
      login,
      logout,
      user,
      //auth,
    }
  },

  // methods: {
  //   login() {
  //     console.log('Login click');
  //     console.log(this.$oidc);
  //   }
  // }

})
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */

  margin-top: 0px;
}
</style>
