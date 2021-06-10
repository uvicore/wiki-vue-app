<template>
  <div class="post">
    <h1>This is a post {{path}}</h1>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
//import { useStore } from '@/store';

export default defineComponent({
  name: 'Post',

  computed: {
    path() {
      return this.$route.path
    }
  }
})

</script>
