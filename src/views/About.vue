<template>
  <div class="about">
    <h1>This is an about page</h1>
    Counter State: {{ counterState.count }}
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { counterStore } from "@/store/counter"


export default defineComponent({
  setup() {
    return {
      counterState: counterStore.getState()
    }
  }

})
</script>
