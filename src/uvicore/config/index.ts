import { App } from 'vue';

// export interface Config {
//   install(app: App, options: object): void
// }

export const Config = {
  install(app: App, options: object): void {
    console.log('config plugin started--------');

    // Add config to our globalProperties
    // Accessible from components with this.$config
    app.config.globalProperties.$config = options

    // But in setup() we don't have access to this so we also
    // provide the config through injection.
    app.provide('config', options)
  }
};
