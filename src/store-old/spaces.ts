// import { Module } from 'vuex';
// import { State } from '@/store';
// import { Space, Spaces, SpacesVariant } from '@/models/space';
// import { ActionTree } from 'vuex';
// import { MutationTree } from 'vuex';
// import { GetterTree } from 'vuex';

// import axios from 'axios';


// export class SpacesState {
//   all: Spaces;
//   //allVariant: SpacesVariant;

//   constructor() {
//     this.all = [];
//     // this.allVariant = {
//     //   section: '',
//     //   spaces: [],
//     // };
//   }
// }

// // export const spacesInitialState: SpacesState = {
// //   all: [],
// //   allVariant: [],
// // }

// // // Default state
// // export const state = {
// //   all: []
// // }

// const api = axios.create({
//   baseURL: "https://wiki-api-local.triglobal.io/api",
// });



// // vuex/types/index.d.ts
// // export interface ActionTree<S, R> {
// //   [key: string]: Action<S, R>;
// // }
// export const actions: ActionTree<SpacesState, State> = {
//     list({ commit }): any {
//       api.get('/spaces').then((res) => {
//         const spaces: Spaces = res && res.data;
//         commit("setSpaces", spaces);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//       // axios({
//       //     url: 'https://....'
//       // }).then((response) => {
//       //     const payload: User = response && response.data;
//       //     commit('profileLoaded', payload);
//       // }, (error) => {
//       //     console.log(error);
//       //     commit('profileError');
//       // });
//     }
// };

// // vuex/types/index.d.ts
// // export interface MutationTree<S> {
// //   [key: string]: Mutation<S>;
// // }
// export const mutations: MutationTree<SpacesState> = {
//     setSpaces(state, payload: Spaces) {
//       state.all = payload;
//       //state.all = payload;
//       //state.spaces = payload
//       // state = payload
//       // state.all = payload;
//       // state.error = false;
//       // state.user = payload;
//     },
//     // profileError(state) {
//     //     state.error = true;
//     //     state.user = undefined;
//     // }
// };


// // vuex/types/index.d.ts
// // export interface GetterTree<S, R> {
// //   [key: string]: Getter<S, R>;
// // }
// export const getters: GetterTree<SpacesState, State> = {
//     variant(state): SpacesVariant[] {
//       //let spaces: Spaces = state.all;

//       let spaces = {};
//       for (var key in state.all) {
//         let space = state.all[key];
//         let section = space.section;
//         //if (!spaces.hasOwnProperty[section]) {
//         if (section in spaces) {
//           console.log('append ' + section);
//           spaces[section].spaces.push({
//             id: space.id,
//             slug: space.slug,
//             section: section,
//             name: space.name,
//             order: space.order,
//           })
//         } else {
//           spaces[section] = {
//             section: section,
//             spaces: [],
//           }
//         }
//       }

//       let spaces_arr: SpacesVariant[] = [];
//       for (var key in spaces) {
//         spaces_arr.push(spaces[key]);
//       }

//       // [
//       //   {
//       //     section: 'IT',
//       //     spaces: [
//       //       {
//       //         name: 'Servers',
//       //         slug: '/it/servers',
//       //         order: 1,
//       //       }
//       //     ]
//       //   }
//       // ]

//       //console.log(spaces_arr);
//       return spaces_arr;
//         // const { user } = state;
//         // const firstName = (user && user.firstName) || '';
//         // const lastName = (user && user.lastName) || '';
//         // return `${firstName} ${lastName}`;
//     }
// };


// export const spaces: Module<SpacesState, State> = {
//   namespaced: true,
//   //state: spacesInitialState,
//   state: new SpacesState(),
//   getters,
//   actions,
//   mutations,
// }

// // from vuex/types/indexed.tx
// // export interface Module<S, R> {
// //   namespaced?: boolean;
// //   state?: S | (() => S);
// //   getters?: GetterTree<S, R>;
// //   actions?: ActionTree<S, R>;
// //   mutations?: MutationTree<S>;
// //   modules?: ModuleTree<R>;
// // }


// // import { useContext } from '@vue/runtime-core';
// // import axios from 'axios';

// // const api = axios.create({
// //   baseURL: "https://wiki-api-local.triglobal.io/api",
// // });


// // // Initial state
// // const state = () => ({
// //   items: []
// // })

// // // Getters
// // const getters = {}

// // // Actions
// // const actions = {
// //   async getSpaces(context: any) {
// //     context.commit("clearItems");
// //     api.get('/spaces').then((res) => {
// //       context.commit("loadItems", res.data);
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });

// //   }
// // }

// // // Mutations
// // const mutations = {
// //   loadItems(state: any, item: any) {
// //     state.items.push(item);
// //   },

// //   clearItems(state: any, item: any) {
// //     state.items = []
// //   }
// // }

// // // Exports
// // export default {
// //   namespaced: true,
// //   state,
// //   getters,
// //   actions,
// //   mutations,
// // }
