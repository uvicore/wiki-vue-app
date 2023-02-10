<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    hi {{ user.email }}
    {{ user.token }}

    <hr>

    <pre>{{schema}}</pre>

    <hr>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    <AuthInfo></AuthInfo>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useUserStore } from '@uvicore/vue-auth';
import AuthInfo from '@/components/AuthInfo.vue';

// import { HelloWorld } from '@uvicore/vue3'
// import { User } from '@uvicore/vue3';

// vite dev npm link from ./
// import HelloWorld from '@uvicore/vue3/lib/components/HelloWorld.vue'
// import { User } from '@uvicore/vue3/lib/models/user'


// vite dev npm link from index.ts
//import { HelloWorld } from '@uvicore/vue-3/components';
// import { Loading1 } from '@uvicore/vue3/components/loading';
// import { User } from '@uvicore/vue3/auth/models';

import { Space } from '../models';


export default defineComponent({
  name: 'Home',

  components: {
    HelloWorld,
    AuthInfo,
  },

  setup() {

    // let user = new User(1, 'matthew', 'mail@mreschke.com');
    // console.log('xxxxxxxxxxxxxxxxxxxxx USER', user);

    const user = useUserStore();


    const schema = Space.schema()


    return {
      //loggedIn: auth.isAuthenticated as boolean
      user,
      schema
    }
  }


});
</script>
