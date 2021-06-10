<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    Logged In {{ loggedIn }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
//import auth from '@/services/auth';


export default defineComponent({
  name: 'Home',

  components: {
    HelloWorld,
  },

  setup() {


    return {
      //loggedIn: auth.isAuthenticated as boolean
      loggedIn: false
    }
  }


});
</script>
