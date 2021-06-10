import { App } from 'vue';
//import { auth } from '@/uvicore/auth/service';

// interface Plugin {
//   install: (app: App, options: object) => void
// }

export const Auth = {
  install(app: App, options: any) {
    let router = options.router;
    let config = options.config;
    let driver = config.driver;
    let AuthClass = config.module;
    config = config[driver]
    console.log('auth plugin started--------');

    let auth = new AuthClass(config).init();
    console.log(auth);
    auth.startup().then((ok:any) => {
      if (ok) {
        auth.useRouter(router)
        console.log('auth OK')
      } else {
        console.error('auth NOT ok');
      }
    })
  }
}
