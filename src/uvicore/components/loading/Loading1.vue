<template>
  <div class="relative flex justify-center items-center h-screen">
    <div
      class="inline-block ease duration-300 w-5 h-5 mx-2"
      :class="spinClass"
    ></div>
  </div>
  <span class="animate-pulse" :class="msgColor">{{ msg }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Loading",

  props: {
    msg: {
      type: String,
      default: 'loading...'
    },
    animation: {
      type: String,
      default: 'spin',
    },
    spinColor: {
      type: String,
      default: 'bg-green-500'
    },
    msgColor: {
      type: String,
      default: 'text-gray-400'
    }
  },

  computed: {
    spinClass(): string {
      return this.spinColor + ' animate-' + this.animation;
    }
  }
})
</script>
