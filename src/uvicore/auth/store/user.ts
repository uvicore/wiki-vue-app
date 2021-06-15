import { defineStore } from 'pinia';
import { User } from '@/uvicore/auth/models/user';

export const userStore = defineStore({
  // unique id of the store across your application
  id: 'user',

  state: () => ({
    id: 1,
    uuid: '11c28e64-cefb-418a-9981-573613dbec8f',  // doesn't matter what this is? I think?
    username: 'anonymous',
    email: 'anonymous@example.com',
    firstName: 'Anonymous',
    lastName: 'User',
    title: 'Anonymous',
    avatar: 'something',
    groups: [],
    roles: [],
    permissions: [],
    superadmin: false,
    authenticated: false,
  } as User),

  getters: {
    // Computed Compoinds
    name: (state) => state.firstName + ' ' + state.lastName,

    // Aliases
    admin: (state) => state.superadmin,
    isAdmin: (state) => state.superadmin,
    isSuperadmin: (state) => state.superadmin,
    isNotAdmin: (state) => !state.superadmin,
    isAuthenticated: (state) => state.authenticated,
    check: (state) => state.authenticated,
    loggedIn: (state) => state.authenticated,
    isLoggedIn: (state) => state.authenticated,
    isNotAuthenticated: (state) => !state.authenticated,
    isNotLoggedIn: (state) => !state.authenticated,
  },

  actions: {

    can(permissions: string[]): boolean {
      // Check if user has ALL of these permissions
      return true;
    },

    canAny(permissions: string[]): boolean {
      // Check if user has any one of these permissions
      return true;
    },

    cant(permissions: string[]): boolean {
      // Check if user does not have one of these permissions
      return !this.can(permissions);
    },

    cannot(permissions: string[]): boolean {
      // Alias to cant()
      return this.cant(permissions);
    }

  }

});








// def cant(self, permissions: Union[str, List]) -> bool:
//     """Check if user does not have one of these permissions"""
//     return not self.can(permissions)

// def cannot(self, permissions: Union[str, List]) -> bool:
//     """Alias to cant"""
//     return not self.cant(permissions)
