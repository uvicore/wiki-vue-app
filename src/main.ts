import { createApp } from 'vue';
import App from './App.vue';
//import { store, key } from './store';
import router from './router';

import './assets/css/app.css';

//createApp(App).mount('#app')
//createApp(App).use(router).mount('#app')
//console.log(App);
const app = createApp(App);
app.use(router);
//app.use(store, key);
app.mount('#app');
