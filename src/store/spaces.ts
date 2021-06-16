import { watch } from 'vue';
import { defineStore } from 'pinia';
import { Space } from '@/models/space';
import { Results } from '@/uvicore/orm/results';
import { Ref, UnwrapRef } from 'vue';

export const spacesStore = defineStore({
  id: 'spaces',

  // state: () => ({
  //   loading: true,
  //   ready: false,
  //   error: '',
  //   results: [] as Space[],
  //   filter: 'all',
  // }),
  // state() {
  //   let x: Results<Space> = new Results();
  //   return x
  // },
  state: () => new Results<Space>(),

  getters: {

  },

  actions: {
    set(state: Ref<UnwrapRef<Results<Space>>>) {
      console.log('SET state');
      this.loading = state.value.loading
      this.error = state.value.error
      this.results = state.value.results
    },

    loadSpaces() {
      const spaces = Space.query().include(['sections.topics']).get();
      watch(() => spaces.value.ready, () => this.set(spaces))
    },

    // Hack example to tweak a name, jsut to test reactivity from other components
    tweak() {
      //this.results[0].name = 'xx';
      this.results[0].name += '?';
      this.results[0].sections![0].name += '?'
    }

  },

});
