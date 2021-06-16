<template>
  <!-- <a v-for="item in subNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-600 hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
    <component :is="item.icon" :class="[item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
    <span class="truncate">
      {{ item.name }}
    </span>
  </a> -->

  <div v-if="posts.loading">
    <Loading msg="loading topic posts..." />
  </div>
  <div v-else
    v-for="post in posts.results" :key="post.id"
    class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium'"
  >
    <router-link :to="post.slug_full">
      {{post.title}}
    </router-link>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watch, inject } from 'vue'
import { useRoute } from 'vue-router';
import { usePostModel, PostModel } from '@/models/post';
import { Results } from '@/uvicore/orm/results';
import Loading from '@/uvicore/components/loading/Loading1.vue'

export default defineComponent({
  name: 'PostsNav',

  components: {
    Loading,
  },

  setup() {
    // Get current route
    const route = useRoute()

    // Get models by factory
    const Post = usePostModel()

    // Create an empty Post ref outside the watch
    let posts = ref<Results<PostModel>>(new Results());

    // Watch for route path changes, and also run "immediate"
    watch(() => route.path, (path, prevPath) => {
      const paths = Post.explode_path(path);
      const prevPaths = Post.explode_path(prevPath!);

      // Not on a /space/section/topic path, don't run query
      if (!paths.topic) {
        posts.value.reset()
        posts.value.loading = false
        return
      }

      // console.log('PATH:', path);
      // console.log('PATHS:', paths);
      // console.log('PREV PATH:', prevPath);
      // console.log('PREV PATHS:', prevPaths);

      // Check only space/section/topic (not /post) for changes, if no changes, don't re-run query
      if (paths.space + paths.section + paths.topic == prevPaths.space + prevPaths.section + prevPaths.topic) {
        return
      }

      // Notice we are passing in our existing ref not opting to build a new one
      // If we returned a new ref, it would be a new different ref than the one
      // we already returned.  You must always keep the same ref instance.
      Post.query()
        .include(['topic.section.space'])
        .where('topic.slug', '=', paths.topic)
        .where('topic.section.slug', '=', paths.section)
        .where('topic.section.space.slug', '=', paths.space)
        .ref(posts)
        .get();
    }, {immediate: true})

    // Setup return
    return {
      posts,
    }

  },
})
</script>
