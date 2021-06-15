import { defineStore } from 'pinia';

export const counterStore = defineStore({
  id: 'counter',

  state: () => ({
    count: 0,
  }),

  getters: {

  },

  actions: {
    incrementCount() {
      this.count ++;
    }

  },

});
