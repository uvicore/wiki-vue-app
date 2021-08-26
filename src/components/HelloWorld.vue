<template>
  <div>---HelloWorld Component Start---</div>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <!-- <button @click="incrementCount">count is: {{ $store.state.count }}</button> -->
  <button @click="incrementCount">count is: {{ counter.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div>---HelloWorld Component End---</div>
</template>

<script lang="ts">

import { ref, defineComponent, onMounted } from 'vue'
//import { useStore } from '@/store'
//import { counterStore } from '@/store/counter'
import { useCounterStore } from '@/store';
import { useSpaceStore } from '@/store';

export default defineComponent({
  name: 'HelloWorld',

  props: {
    msg: {
      type: String,
      required: true
    }
  },

  setup(props) {

    const counter = useCounterStore();
    const spaces = useSpaceStore();


    //const store = useStore()
    //console.log(store);
    // return {
    //   store.state.count
    // }
    // const count = ref(0)
    // return { count }

    function incrementCount() {
      console.log('click counter');
      counter.incrementCount();
      spaces.tweak();


    }

    return {
      counter,
      incrementCount,
      //counterState: counterStore.getState(),
      //spaces: spaceStore.getState(),
    }
  },

  //methods: {
    // msgClick() {
    //   console.log(this.msg);
    //   console.log(this.$api);
    // },

  //   incrementCount() {
  //     console.log('incrementCount clicked');
  //     counterStore.incrementCount()
  //     console.log(this.counterState);

  //     if (this.spaces.length) {
  //       spaceStore.tweak()
  //     }

  //     // console.log(this.$store);
  //     // this.$store.commit('increment');
  //     // console.log(this.$store.state.count);
  //   }
  // }

})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
