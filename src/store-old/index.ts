import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { Space, Spaces } from '@/models/space';
import { spaces, SpacesState } from './spaces';


// Vuex and Typescript
// https://codeburst.io/vuex-and-typescript-3427ba78cfa8
// https://github.com/emmanuelhashy/vue3-task-manager/tree/main/src/store
//   Docs here https://soshace.com/building-web-apps-with-vue-3-composition-api-typescript-vuex4-0/


// Entire State interface
export interface State {
  loading: boolean;
  menuOpen: boolean;
  spaces: SpacesState;
  count: number;
}

// Initial state values
export const state: State = {
  loading: false,
  menuOpen: false,
  spaces: new SpacesState(),
  count: 0,
}

// export interface RootState {
//   count: number,
//   spaces: [Space?],
// }

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  // state: {
  //   count: 0,
  //   spaces: [],
  // },

  mutations: {
    increment(state) {
      state.count++
    }
  },

  modules: {
    spaces,
  }
});

export function useStore() {
  return baseUseStore(key)
}


// import { createStore, createLogger } from 'vuex';
// import spaces from './spaces';

// export default createStore({
//   modules: {
//     spaces,
//   }
// })




// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
