<template>
  <div class="post">
    <h1>This is a post {{this.$route.path}}</h1>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from '@/store';

export default defineComponent({
  name: 'Post',
})

</script>
