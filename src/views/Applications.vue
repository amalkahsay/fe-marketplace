<template>
<div id="applications" class="applications" style="min-height: 100vh;">
Applications
<div style="min-height: 100vh;"><img src="https://images.prismic.io/risidio-journal/8252dc23-580c-4fdf-a460-e2a3f8b258fc_Repeat+Grid+42.png?auto=compress,format" alt=""></div>
        <div :style="bannerImage" class="bg-secondary pt-5 d-flex align-items-center flex-column">
    <div class="my-auto text-white text-center">
    <b-container  class="pb-4 text-center">
      <b-row align-h="center" >
        <b-col align-self="center">
                              <prismic-items :prismicItems="content.title1"></prismic-items>
           <prismic-items :prismicItems="content.text1"></prismic-items>
      </b-col></b-row>
     <b-row align-h="center" > <b-col>
           <button class="button-primary"><router-link class="text-white" to="/">Add your application</router-link></button>
        </b-col><b-col>
           <button class="button-primary"><router-link class="text-white" to="/">Find out more</router-link></button>
        </b-col></b-row>
   </b-container></div></div>
     <b-container  class="pb-4 text-center">
      <b-row align-h="center" >
        <b-col align-self="center">
                              <prismic-items :prismicItems="content.title2"></prismic-items>
           <prismic-items :prismicItems="content.text2"></prismic-items>
            <prismic-items :prismicItems="content.text22"></prismic-items>
      </b-col></b-row>
     <b-row align-h="center" > <b-col>
           <button class="button-primary"><router-link class="text-white" to="/">How it works</router-link></button>
        </b-col><b-col>
           <button class="button-primary"><router-link class="text-white" to="/">About Risidio</router-link></button>
        </b-col></b-row>
   </b-container></div>
</template>

<script>
import PrismicItems from '@/components/utils/PrismicItems'
export default {
  name: 'applications',
  components: {
    PrismicItems
  },
  props: ['applications'],
  data () {
    return {
      response: null,
      logo: require('@/assets/img/risidio - logo-black.svg'),
      web: require('@/assets/img/web.svg')
    }
  },
  computed: {
    content () {
      const content = this.$store.getters['contentStore/getApplications']
      return content
    },
    block1Items () {
      const content = this.$store.getters['contentStore/getApplications']
      return content.block1
    }
  }
}
</script>
<style scoped >
.applications{
  color: rgb(0, 0, 0);
  text-align: center;
  padding-top: 250px;
  font-size: 30px;
}
body {
text-align: center;
}
        .bg-secondary.pt-5.d-flex.align-items-center.flex-column {
  z-index: -1;
   padding: 0px;
  height: 465px;
  width: 100%;
 background-repeat: no-repeat;
 background-image: url("https://images.prismic.io/digirad/26e2345d-0e6d-434c-b342-02e91a7d921d_Group+16040.png?auto=compress,format");
  background-position: center center;
  background-size: cover; opacity: 100%;}
    /* content () {
      const content = this.$store.getters['contentStore/getApplications']
      return content
    }, */
</style>
