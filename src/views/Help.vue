<template>
<div id="help" class="help">
   <div :style="bannerImage" class="bg-secondary pt-5 d-flex align-items-center flex-column">
    <div class="my-auto text-white text-center">
              <b-container style="min-height: 18vh" class="pb-4 text-center">
      <b-row align-h="center" style="min-height: 18vh">
        <b-col align-self="center">
        <prismic-items :prismicItems="content.title1"></prismic-items>
</b-col>
     </b-row>
   </b-container>
 </div></div>
           <b-container style="min-height: 18vh" class="pb-4 text-center">
         <b-row align-h="center" style="min-height: 18vh">
                                                   <input type="text" v-model="search" class="search" placeholder="search">
<div v-for="post in filteredPosts" :key="post.id">
<post :post="post"></post>
                <b-col md="" sm="10" align-self="center">
        <prismic-items :prismicItems="content.title2" class="ss"></prismic-items>
             <prismic-items :prismicItems="content.text2"></prismic-items>
</b-col></div>
     </b-row>
   </b-container>
       </div>
</template>
<script>
// import script from '@/search/script.js'
// import suggestions from '@/search/suggestions.js'
import PrismicItems from '@/components/utils/PrismicItems'
export default {
  name: 'help',
  components: {
    PrismicItems
  },
  props: ['help'],
  data () {
    return {
      response: null,
      search: '',
      posts: [
        {
          id: 'content.title1',
          title: '1.quetion',
          body: 'lorem ipsum'
        },
        {
          id: 2,
          title: 'Help/faq',
          body: 'Help/faq'
        }
      ]
    }
  },
  methods: {
  },
  computed: {
    content () {
      const content = this.$store.getters['contentStore/getHelp']
      return content
    },
    filteredPosts: function () {
      return this.posts.filter(post => post.body.includes(this.search))
    }
  }
}
</script>
<style scoped >
#aboutus{
  color: rgb(0, 0, 0);
  text-align: center;
}
.h1{
text-align: center;
}
.container1 {
  width: 100%;
}
.container1 img {
  width: auto;
  height: auto;
}
.TEXT-BLACK{
    color: blue;
}
.div{
    color: brown;
}
.wrapper{
  max-height: 200pt;
  border: 1px solid white;
  display: flex;
  overflow-x: auto;

}
.wrapper::-webkit-scrollbar{
width:0;
}
.wrapper .item{
    background-color: #777;
  min-width:11px;
  min-height:20px;
  line-height: 20px;
  text-align: center;
  background-color: white;
  margin-right: 2px;
}
.bg-secondary.pt-5.d-flex.align-items-center.flex-column {
  z-index: -1;
   padding: 0px;
  height: 465px;
  width: 100%;
 background-repeat: no-repeat;
 background-image: url("https://images.prismic.io/digirad/26e2345d-0e6d-434c-b342-02e91a7d921d_Group+16040.png?auto=compress,format");
  background-position: center center;
  background-size: cover; opacity: 1;}
  .search {
    line-height: 30px;
    padding: 10px 45px;
    border-radius: 100px;
    border: 1px solid #ccc;
    font-size: 16px;
     float: right;
    display: block;
    width: 50%;
    margin-right: 30px;
    }
    .navbar{
  position: fixed;
  transition: 1s;
}
  </style>
