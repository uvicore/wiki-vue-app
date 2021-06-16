// Vue
import App from './App.vue';
import { createApp } from 'vue';

// Plugins
import { Router } from './router';
import { createPinia } from 'pinia';
import { Auth } from '@/uvicore/auth';
import { Config } from '@/uvicore/config';

// Assets
import './assets/css/app.css';

// Config file
import { config } from '@/config';


// Application Creation
const app = createApp(App);

// Configuration plugin
// Accessible in our globalProperties using this.$config
// But also as an injection token called 'config' since setup() cannot access 'this.'

app.use(Config, config);

// Pinia Store (a vuex replacement)
app.use(createPinia());

// Authentication and authorization plugin
app.use(Auth, {
  router: Router,
  config: config.auth
});

// Vue Route plugin
app.use(Router);
//app.use(store, key);


// Application Mount
app.mount('#app');



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



