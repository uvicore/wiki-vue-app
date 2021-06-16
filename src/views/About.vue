<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="incrementCount">Counter State: {{ counter.count }}</div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useCounterStore } from "@/store/counter"


export default defineComponent({
  setup() {
    const counter = useCounterStore()

    function incrementCount() {
      counter.incrementCount()
    }

    return {
      counter, incrementCount,
    }
  }

})
</script>
