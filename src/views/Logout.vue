<template>
  You are logged out

  <AuthInfo></AuthInfo>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthInfo from '@/components/AuthInfo.vue';

export default defineComponent({
  name: 'Logout',

  components: {
    AuthInfo
  },

  setup() {

  },
})
</script>
