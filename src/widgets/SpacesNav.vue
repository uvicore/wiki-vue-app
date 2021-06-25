<template>

    <div v-if="spaces.loading"
      class="border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
      <Loading msg="loading spaces..." />
    </div>
    <div v-else-if="spaces.error"
      class="border-transparent text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
      {{spaces.error}}
    </div>
    <div v-else class="inline-flex items-center">
      <router-link to="/about">About</router-link>
      <PopoverGroup
        v-for="space in spaces.results" :key="space.id"
        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 px-5 pt-1 border-b-2 text-sm font-medium"
        as="nav">

        <Popover v-slot="{ open }" class="relativeXXXNO">
          <PopoverButton @click="opened == space.id ? opened = 0 : opened = space.id" :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
            <span>{{space.name2}}</span>
            <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">

            <div v-if="opened == space.id">

              <PopoverPanel static class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-full sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">

                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">

                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">


                    <nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-4 sm:gap-x-8 sm:py-4 sm:px-0 lg:px-8 xl:pr-0 " aria-labelledby="solutionsHeading">
                      <div v-for="section in space.sections" :key="section.id">
                        <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">
                          {{section.name}}
                        </h3>
                        <ul class="mt-5 space-y-6">
                          <li v-for="topic in section.topics" :key="topic.id" class="flow-root">


                            <router-link
                              @click="opened = 0"
                              :to="topic.slug_full"
                              class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                              <!-- <component :is="IconsOutline[topic.icon]" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" /> -->

                              <div class="ml-4">
                                <p class="text-base font-medium text-gray-900">
                                  {{ topic.name }}
                                </p>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ topic.desc }}
                                </p>
                              </div>
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </nav>

                  </div>

                  <!-- <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                      <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div> -->
                </div>

              </PopoverPanel>
            </div>
          </transition>
        </Popover>
      </PopoverGroup>
    </div>


  <!-- <a href="#" class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
    Dashboard2
  </a>
  <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
    Team2
  </a>
  <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
    Projects2
  </a>
  <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
    Calendar2
  </a> -->
</template>

<script lang="ts">
import { defineComponent, ref  } from 'vue'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import Loading from '@uvicore/vue3/components/loading/Loading1.vue'

import * as IconsOutline from '@heroicons/vue/outline';
import * as IconsSolid from '@heroicons/vue/solid';
import { Space } from '@/models';
import { useSpaceStore } from '@/store';

export default defineComponent({
  name: 'SpacesNav',

  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    Loading,
  },

  setup() {

    // Get models by factory
    //const Space = useSpaceModel()

    // In this example, we are storing our spaces in state using Pinia store
    // The spaces store returns the exact same Results object as our API client
    // does.  We can also use our API client to save result right back to the store
    // instead of returning them as a ref!
    const spaces = useSpaceStore()

    // If we wanted to skip the API client and call an "action" on our store
    //spaces.loadSpaces();

    // But using the API client is more powerful.  We can still use the API client
    // but have the results set to our space store using .state(spaces)!
    Space.query().include(['sections.topics']).state(spaces).get();

    // If we didn't have a store, we could return the result as a reactive ref
    //let spaces = Space.query().include(['sections.topics']).get();




    //let space = Space.query().include(['sections.topics']).find(1);

    //let spaces = ref<Space[]>([]);
    //let spaces = ref(Space.get4());

    // console.log('hi');

    // Works
    // const getSpaces = async() => {
    //   spaces.value = await Space.get();
    // }

    //let spaces = ref(getSpaces().then((res: any) => res.data))
    //let spaces = ref(await getSpaces())



// const loadSpaces = async() => {
//   const api = axios.create({
//     baseURL: "https://wiki-api-local.triglobal.io/api",
//   });
//   // return api.get('/spaces?include=sections.topics').then((res) => {
//   //   return res.data;
//   // });
//   return api.get('/spaces?include=sections.topics');
// }


    // works outside onMounted too
    //Space.get2(spaces)

    //let x = Space.get3();
    //console.log(spaces.value);


    // // const getSpaces = async () => {
    // //   spaces.value = await Space.get().then((res: any) => {
    // //     console.log('x');
    // //     console.log(res.data);
    // //     return res.data;
    // //   });
    // // }

    // Works
    // onMounted(async () => {
    //   spaces.value = await Space.get2();
    // });


    // onMounted(() => {
    //   console.log("Before Mount!");


      //spaces = Space.get6();

      // Works
      //Space.get2(spaces)


      //getSpaces()

      // Works inline anon async fn
      // (async () => {
      //   spaces.value = await Space.get();
      // })();
    // });




    // Load spaces from API into our space store
    //spaceStore.getSpaces()

    //const spaces = ref(await loadSpaces());

    const opened = ref(0);

    return {
      //spaces: spaces.value.data,
      //spaces: spaceStore.getState(),
      //spaces: spacesX,
      spaces,
      opened,
      IconsOutline,
      IconsSolid
    }
  },

  // created() {
  //   spaceStore.getSpaces();
  // },


  methods: {
  //   openP() {
  //     this.opened = true;
  //   },

  //   xxx() {
  //     console.log(this.opened);
  //     this.opened = false
  //     console.log(this.opened);
  //   }
  }
})
</script>
