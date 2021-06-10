<template>

  <router-link to="/about">adsf</router-link>

  <div v-if="spaces.length" class="inline-flex items-center">
    <PopoverGroup v-for="space in spaces" :key="space.id" as="nav" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 px-5 pt-1 border-b-2 text-sm font-medium">
      <Popover v-slot="{ open }" class="relative">
        <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
          <span>{{space.name}}</span>
          <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
        </PopoverButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
          <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                <router-link
                  v-for="section in space.sections" :key="section.id"
                  :to="space.slug + section.slug"
                  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"

                >
                  <component :is="section.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">
                      {{ section.name }}
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      <!-- {{ section.description }} -->
                      desc here
                    </p>
                  </div>
                </router-link>

              </div>
              <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                  <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span class="ml-3">{{ item.name }}</span>
                  </a>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>

      </Popover>
    </PopoverGroup>
  </div>
  <div v-else class="border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
    <Loading msg="loading spaces..." />
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
import { defineComponent } from 'vue'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import Loading from '@/uvicore/components/loading/Loading1.vue'

const spaces = [
  {
    // table: spaces
    id: 1,
    slug: '/it',
    name: 'IT',
    order: 1,

    // one-to-many "include" relation
    // table: space_sections
    sections: [
      {
        id: 1,
        slug: '/production',
        name: 'Production',
        description: 'Production network blah blah',
        icon: ChartBarIcon,
        order: 1,
        space_id: 1
      },
      {
        id: 2,
        slug: '/branch',
        name: 'Branch',
        description: 'Branch network blah blah',
        icon: CursorClickIcon,
        order: 2,
        space_id: 1
      },
    ]
  },
  {
    // table: spaces
    id: 2,
    slug: '/dev',
    name: 'Development',
    order: 2,

    // table: space_sections
    sections: [
      {
        id: 3,
        slug: '/python',
        name: 'Python',
        description: 'Python blah blah',
        icon: ShieldCheckIcon,
        order: 1,
        space_id: 2,
      },
      {
        id: 4,
        slug: '/rust',
        name: 'Rust',
        description: 'Rust blah blah',
        icon: ViewGridIcon,
        order: 2,
        space_id: 2,
      },
    ]
  },
  {
    // table: spaces
    id: 3,
    slug: '/support',
    name: 'Tech Support',
    order: 3,

    // table: space_sections
    sections: [
      {
        id: 5,
        slug: '/pc',
        name: 'PC',
        description: 'PC support blah blah',
        icon: RefreshIcon,
        order: 1,
        space_id: 3,
      },
      {
        id: 6,
        slug: '/printer',
        name: 'Printer',
        description: 'Printer support blah blah',
        icon: ShieldCheckIcon,
        order: 2,
        space_id: 3,
      },
    ]
  }
]


const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]

const callsToAction = [
  { name: 'Show All Posts', href: '#', icon: PlayIcon },
  { name: 'Add Section', href: '#', icon: PhoneIcon },
]

import { spaceStore } from '@/models/space';

export default defineComponent({
  name: 'SpacesNav',

  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    Loading,
  },

  setup() {
    //spacesStore.getSpaces()

    return {
      //spaces,
      spaces: spaceStore.getState(),
      solutions,
      callsToAction,
    }
  },

  created() {
    spaceStore.getSpaces();
  }
})
</script>
