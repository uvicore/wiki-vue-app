import { App } from 'vue';
import { useUserStore } from '@/uvicore/auth/store/user';
import { AuthInterface } from '@/uvicore/auth/interface';


export function createAuth(config: any): AuthInterface {

    // Narrow config to this drivers config
    config = config[config.driver];

    // Instantiate the drivers adapter class
    const adapter = new config.adapter(config);

    // Initialize the adapter
    adapter.init();

    // Initialize our Pinia user store with our auth adapter and config
    // const user = useUserStore();
    // user.init(adapter, config);

    return adapter
}








// /**
//  * Vue3 Plugin
//  */
// //export const createAuth = {
// export function createAuth(options: any) {
//   return {
//     install(app: App) {
//       console.debug('Plugin uvicore.auth started');

//       // let router = options.router;
//       // let config = options.config;
//       // let driver = config.driver;
//       // let AuthClass = config.module;
//       // config = config[driver]

//       // Get driver specific config
//       const config = options.config[options.config.driver];

//       // Instantiate the drivers adapter class
//       const adapter = new config.adapter(config);

//       // Initialize the adapter
//       adapter.init();

//       // Initialize our Pinia user store with our auth adapter and config
//       const user = useUserStore();
//       user.init(adapter, config);

//       // Instantiate the main Auth class with our drivers adapter
//       // const auth = new Auth(adapter, config);
//       // console.log('Auth: ', auth);

//       // Provide the auth class to vues injection system
//       //app.provide('auth', auth);

//       // Hook vue router into auth router.  This is what creates the
//       // proper interceptor endpoints to handle the tokens
//       user.adapter.base.useRouter(options.router)

//       // console.log("OIDCAuth: ", auth);
//       user.adapter.base.startup().then((ok:any) => {
//         if (ok) {
//           console.log('AUTH: OK')
//         } else {
//           console.error('AUTH: not ok');
//         }
//       })
//     }
//   }
// }
