<template>
  <!-- <a v-for="item in subNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-600 hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
    <component :is="item.icon" :class="[item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
    <span class="truncate">
      {{ item.name }}
    </span>
  </a> -->

  <div
    v-for="post in posts.results" :key="post.id"
    class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium'"
  >
    <router-link :to="slug(post)">
      {{post.title}}
    </router-link>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import { Post } from '@/models';
import { Results } from '@/uvicore/orm/results';

export default defineComponent({
  name: 'PostsNav',

  setup() {
    // Get current route
    const route = useRoute()
    const path = route.path;

    function slug(post: Post): string {
      return post.topic.section.space.slug + post.topic.section.slug + post.topic.slug + '/' + post.slug
    }

    // Create an empty Post ref outside the watch
    let posts = ref<Results<Post>>(new Results());

      // Watch for route path changes, and also run "immediate"
      // FIXME, should be able to check OLD and NEW, if has not changed, DON't re-run
      // or it causes the side bar to "flash"
    watch(() => route.path, (path) => {
      const path_split = path.split('/');
      const space_slug = '/' + path_split[1];
      const section_slug = '/' + path_split[2];
      const topic_slug = '/' + path_split[3];
      const post_slug = path_split[4];

      Post.query()
        .include(['topic.section.space'])
        .where('topic.slug', '=', topic_slug)
        .where('topic.section.slug', '=', section_slug)
        .where('topic.section.space.slug', '=', space_slug)
        .ref(posts)
        .get();
    }, {immediate: true})

    return {
      posts,
      slug,
    }

  },
})
</script>
