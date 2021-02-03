import Vue2Filters from "vue2-filters";
<template>
  <div class="home">
    
    <h1>{{ users }}</h1>
    <!-- <h1>{{ msg | lowercase }}</h1> -->
    <ul>
    <li v-for="user in orderBy(users, 'Peter')">
      <!-- <h3><a v-bind:href="`/posts/${post.id}`">{{ post.title }}</a></h3> -->
      <p>{{ user }}</p>
      <hr>
    </li>
    </ul>
  </div>
</template>
<style>
</style>

<script>
  import axios from "axios";
  import Vue2Filters from 'vue2-filters';

  export default {
  data: function() {
    return {
      message: "Welcome to the index page!",
      posts: [],
      users: []
    };
  },
  created: function() {
    this.indexPosts();
  },
  methods: {
    indexPosts: function() {
      console.log('in posts index');
      axios.get('/api/posts').then(response => {
        console.log(response.data);
        this.posts = response.data;
      })
    }
  },
  mixins: [Vue2Filters.mixin],
  };

</script>