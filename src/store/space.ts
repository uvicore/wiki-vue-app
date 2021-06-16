import { watch } from 'vue';
import { defineStore } from 'pinia';
import { Ref, UnwrapRef } from 'vue';
import { Results } from '@/uvicore/orm/results';
import { useSpaceModel, SpaceModel } from '@/models/space';

export const useSpaceStore = defineStore({
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
  state: () => new Results<SpaceModel>(),

  getters: {

  },

  actions: {
    set(state: Ref<UnwrapRef<Results<SpaceModel>>>) {
      this.loading = state.value.loading
      this.error = state.value.error
      this.result = state.value.result
      this.results = state.value.results
    },

    // Not needed because the ORM style API client can return results into this store!
    loadSpaces() {
      const Space = useSpaceModel()
      const spaces = Space.query().include(['sections.topics']).get();
      watch(() => spaces.value.ready, () => this.set(spaces))
    },

    // Hack example to tweak a name, just to test reactivity from other components
    tweak() {
      //this.results[0].name = 'xx';
      this.results[0].name += '?';
      this.results[0].sections![0].name += '?'
    }

  },

});
