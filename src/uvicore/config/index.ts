import { App } from 'vue';

// export interface Config {
//   install(app: App, options: object): void
// }

export const Config = {
  install(app: App, options: object): void {
    console.log('config plugin started--------');
    app.config.globalProperties.$config = options
  }
};
