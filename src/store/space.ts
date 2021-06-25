import { Space } from '@/models';
import { defineStore } from 'pinia';
import { UnwrapRef, watch } from 'vue';
import { Results } from '@uvicore/vue3/orm/results';


export const useSpaceStore = defineStore({
  id: 'spaces',

  // State matched API Client return (reactive UnwrapRef<Results<E>)
  state: () => Space.newRef(),

  getters: {

  },

  actions: {
    set(state: UnwrapRef<Results<Space>>) {
      this.loading = state.loading
      this.error = state.error
      this.result = state.result
      this.results = state.results
    },

    // Not needed because the ORM style API client can return results into this store!
    loadSpaces() {
      const spaces = Space.query().include(['sections.topics']).get();
      watch(() => spaces.ready, () => this.set(spaces))
    },

    // Hack example to tweak a name, just to test reactivity from other components
    tweak() {
      //this.results[0].name = 'xx';
      this.results[0].name += '?';
      this.results[0].sections![0].name += '?'
    }

  },

});
