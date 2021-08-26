<template>
<h1 class="text-2xl font-bold text-gray-900 mt-10">AuthInfo Component</h1>
<pre>
id: {{ user.id }}
username: {{ user.username }}
email: {{ user.email }}
firstName: {{ user.firstName }}
lastName: {{ user.lastName }}
title: {{ user.title }}
avatar: {{ user.avatar }}
groups: {{ user.groups }}
roles: {{ user.roles }}
permissions: {{ user.permissions }}
superadmin: {{ user.superadmin }}
authenticated: {{ user.authenticated }}
</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@uvicore/vue-auth';

export default defineComponent({
  name: 'AuthInfo',

  setup() {
    const user = useUserStore();

    return {
      user
    }

  },
})
</script>
