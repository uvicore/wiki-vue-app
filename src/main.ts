// Vue
import App from './App.vue';
import { createApp } from 'vue';

// Plugins
import { Router } from './router';
import { createPinia } from 'pinia';
import { createAuth, useUserStore } from '@uvicore/vue-auth';
import { createConfig } from '@uvicore/vue-config';

// Assets
import './assets/css/app.css';

// Config file
import { config } from '@/config';
import { useConfigStore } from '@uvicore/vue-config';

//import { auth } from './auth';
// let auth = new OidcAuth(config.auth.oidc).init().base;
//import { auth } from '@/uvicore/auth/adapters/oidc';


// Create the auth system based on the configured auth adapter
const auth = createAuth(config.auth, config.app.apis);

// Hook vue router into the auth system for JWT route interceptors
// @ts-ignore
auth.useRouter(Router);

// Once auth has started, create the vue app
// If the vue app is created before auth is ready, the main App.vue will not
// see us as authenticated propely, even through the ref reactivity system.
auth.startup().then((ok: any) => {
  if (ok) {

    // Create Vue Application
    const app = createApp(App);

    // Configuration plugin
    // Accessible in our globalProperties using this.$config
    // But also as an injection token called 'config' since setup() cannot access 'this.'
    // @ts-ignore
    app.use(createConfig(config));

    // Pinia Store (a vuex replacement)
    // @ts-ignore
    app.use(createPinia());

    // Authentication and authorization plugin
    // app.use(createAuth({
    //   router: Router,
    //   config: config.auth
    // }));

    // Vue Route plugin
    app.use(Router);
    //app.use(store, key);

    // Initialize auth user pinia store
    const user = useUserStore();
    user.init(auth);

    // Initialize config pinia store
    const cs = useConfigStore();
    cs.load(config);

    // Application Mount
    app.mount('#app');

  } else {
    console.error('Uvicore Authentication System Error');
  }
})









// auth.startup().then((ok) => {
//   if (ok) {
//     //createApp(App).mount('#app')
//     //createApp(App).use(router).mount('#app')
//     //console.log(App);
//     const app = createApp(App);
//     app.use(router);
//     //app.use(store, key);
//     app.mount('#app');

//     app.config.globalProperties.$api = 'xyz';
//     console.log(app.config);

//   } else {
//     console.error('auth init error');
//   }

// })



