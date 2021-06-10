import App from './App.vue';
import { createApp } from 'vue';
//import { store, key } from './store';
import { Router } from './router';

import './assets/css/app.css';

//import auth from '@/services/auth';

import { config } from '@/config';
import { Auth } from '@/uvicore/auth';
import { Config } from '@/uvicore/config';


// Create main vue application
const app = createApp(App);

// Add vue plugins
app.use(Config, config);
app.use(Auth, {
  router: Router,
  config: config.auth
});
app.use(Router);
//app.use(store, key);

// Mount app
app.mount('#app');

console.log(app.config);





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



