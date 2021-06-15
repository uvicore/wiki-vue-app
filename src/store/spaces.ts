import { defineStore } from 'pinia';
import { Space } from '@/models/space';


export const spacesStore = defineStore({
  id: 'spaces',

  state: () => ({
    spaces: [],
    filter: 'all',
  }),

  getters: {

  },

  actions: {
    loadSpaces() {

    }

  },

});
