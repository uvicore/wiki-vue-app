<!--<template>

  <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
    <router-link to="/" :aria-current-value="page" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
      Home
    </router-link>

    <router-link to="/about" :aria-current-value="page" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
      About
    </router-link>

    <div
      v-for="section in spaces" :key="section.section"
      class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      <div class="ml-3 relative">
        <button
          v-on:click="toggleSpaceMenu(section.section)"
          type="button"
          class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
        >
          {{section.section}}
        </button>
      </div>

      <div
        v-for="space in section.spaces" :key="space.id"
        class="rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"
      >
        <router-link
          :to="space.slug"
          class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"
        >
          {{ space.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
a.router-link-active {

  /*Active
  class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
  aria-current="page"

  Inactive
  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
  */

  @apply border-indigo-500;
  @apply text-gray-900;
}
</style>


<script lang="ts">
import { defineComponent, computed } from 'vue';
//import { useStore } from '@/store';
import { SpacesVariant } from '@/models/space';

import { mapGetters } from 'vuex';

// Example of Composition API and Vuex
// https://github.com/vuejs/vuex/blob/4.0/examples/composition/shopping-cart/components/ProductList.vue
export default defineComponent({
  name: 'Spaces',

  setup() {
    // console.log('spaces setup here');
    // const store = useStore();
    // const spaces = computed(() => store.getters['spaces/variant']);
    // //const spaces: SpacesVariant = computed(() => store.getters['spaces/variant']);
    // store.dispatch('spaces/list');

    // for (x in spaces) {
    //   console.log(x);
    // }

    // let x = 'hi';
    // return {
    //   spaces,
    //   x
    // }
  },

  created() {
    // console.log('created', this.$store.getters['spaces/variant']);
    //console.log(this.x);
    //


  }

  // computed: {
  //   ...mapGetters( {
  //     xx: 'xx',
  //   })
  // },

});
</script>

-->
