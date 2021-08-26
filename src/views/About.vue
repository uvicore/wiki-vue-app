<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="incrementCount">Counter State: {{ counter.count }}</div>
  </div>
  <hr>
  sections:
  <div v-if="sections.ready">
    {{ sections.results[0].name }}
  </div>
</template>

<script lang="ts">

import { defineComponent, watch } from 'vue'
import { useCounterStore } from '@/store/counter'
import { useUserStore } from '@uvicore/vue-auth';

import { Section } from '@/models/section';


export default defineComponent({
  setup() {
    const counter = useCounterStore()
    const user = useUserStore()


    let sections = Section.query().get();
    watch(() => sections.loading, (x) => {
      //console.dir(sections.results[0], 'SSSSSSSSSSSS');
      //console.log(JSON.parse(JSON.stringify(sections.results)));
      console.log(sections.toObject());
      console.log('x')
    });


    console.log('ABOUT: ', user.authenticated);

    function incrementCount() {
      counter.incrementCount()
    }

    return {
      counter, incrementCount, sections
    }
  }

})
</script>
