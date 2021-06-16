<template>
  <div class="post">
    <h1 class="text-xs">{{route.path}}</h1>
  </div>

  <div v-if="post.loading">
    <Loading msg="loading post..." />
  </div>
  <div v-else>
    <h1 class="text-xl">{{post.result.title}}</h1>
    <hr>
    <section>
      {{post.result.body}}
    </section>
  </div>

</template>

<script lang="ts">
import { ref, Ref, UnwrapRef, defineComponent, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Post } from '@/models'
import Loading from '@/uvicore/components/loading/Loading1.vue'
import { Results } from '@/uvicore/orm/results'


export default defineComponent({
  name: 'Post',

  components: {
    Loading
  },

  setup() {
    // Get current route
    const route = useRoute()
    const path = route.path;

    function slug(post: Post): string {
      return post.topic.section.space.slug + post.topic.section.slug + post.topic.slug + '/' + post.slug
    }

    // Create an empty Post ref outside the watch
    let post = ref<Results<Post>>(new Results());

    // Watch for route path changes, and also run "immediate"
    watch(() => route.path, (path) => {
      const path_split = path.split('/');
      console.log(path_split);
      const space_slug = '/' + path_split[1];
      const section_slug = '/' + path_split[2];
      const topic_slug = '/' + path_split[3];
      const post_slug = path_split[4];
      console.log('PATH:', path)
      console.log('PATH_SPLIT:', path_split)

      // Notice we are passing in our existing ref not opting to build a new one
      // If we returned a new ref, it would be a new different ref than the one
      // we already returned.  You must always keep the same ref instance.
      Post.query()
        .include(['topic.section.space'])
        .where('slug', '=', post_slug)
        .where('topic.slug', '=', topic_slug)
        .where('topic.section.slug', '=', section_slug)
        .where('topic.section.space.slug', '=', space_slug)
        // Use existing outside ref
        .ref(post)
        .find()
      console.log('POST:', post.value);
    }, {immediate: true})

    onMounted(() => {
      console.log('Posts mounted')
    })


    return {
      post,
      slug,
      route,
    }
  }

})

</script>
