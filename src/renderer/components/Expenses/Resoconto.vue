<template>
    <div>
        <h1>RESOCONTO</h1>
        <div v-bind:key="post" v-for="post in posts">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div>
    </div>
</template>
<script>
import PostsService from '../../services/PostsService'

export default {
  name: 'Resoconto',
   data () {
    return {
      posts: []
    }
  },
  // mounted () {
  //   this.getPosts()
  // },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
    }
  }
}
</script>
<style>
</style>