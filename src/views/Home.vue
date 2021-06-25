<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    Logged In {{ loggedIn }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src

// import { HelloWorld } from '@uvicore/vue3'
// import { User } from '@uvicore/vue3';

// vite dev npm link from ./
// import HelloWorld from '@uvicore/vue3/lib/components/HelloWorld.vue'
// import { User } from '@uvicore/vue3/lib/models/user'


// vite dev npm link from index.ts
import { HelloWorld } from '@uvicore/vue3/components';
// import { Loading1 } from '@uvicore/vue3/components/loading';
// import { User } from '@uvicore/vue3/auth/models';


export default defineComponent({
  name: 'Home',

  components: {
    HelloWorld,
  },

  setup() {

    // let user = new User(1, 'matthew', 'mail@mreschke.com');
    // console.log('xxxxxxxxxxxxxxxxxxxxx USER', user);

    return {
      //loggedIn: auth.isAuthenticated as boolean
      loggedIn: false
    }
  }


});
</script>
