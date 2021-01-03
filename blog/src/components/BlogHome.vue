<script>
    import { butter } from '@/buttercms'
    export default {
      name:'blog-home',
      data(){
          return{
              page_title:'Blog',
              posts:[]
          }
      },
      methods:{
          getPosts(){
              butter.post.list({
                  page:1,
                  page_size: 10
              }).then((res) => {
                  // console.log(res.data)
                  console.log('Content from ButterCMS')
                  console.log(res)
                  this.posts = res.data.data
              }) 
          }
       },
       created(){
           this.fetchPosts()
       }   
    }
</script>

<template>
    <div id="blog-home">
        <h1>{{ page_title }}</h1>
        <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
            <router-link :to="'/blog/' + post.slug">
                <article class="media">
                    <figure>
                        <img v-if="post.featured_image" :src="post.featured_image" alt="">
                        <img v-else src="http://via.placeholder.com/250x250" alt="">
                    </figure>
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.surrmary }}</p>
                </article>
            </router-link>
        </div>
    </div>
</template>