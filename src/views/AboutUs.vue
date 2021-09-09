<template>
<div id="aboutus" class="aboutus" style="min-height: 100vh;">
   <div :style="bannerImage" class="bg-secondary pt-5 d-flex align-items-center flex-column">
    <div class="my-auto text-white text-center">
              <b-container style="min-height: 18vh" class="pb-4 text-center">
      <b-row align-h="center" style="min-height: 18vh">
        <b-col align-self="center">
        <prismic-items :prismicItems="content.title1"></prismic-items>
           <prismic-items :prismicItems="content.title2"></prismic-items>
          <b-button href="https://risidio.com/">Visit Our Website</b-button>
             </b-col>
             </b-row>
   </b-container>
    </div></div>

       <b-container text-alighn="center" style="min-height: 18vh" class="pb-4 text-center">
      <b-row align-h="center" style="min-height: 18vh">
        <b-col md="8" sm="10" align-self="center">
          <img :src="logo" alt="risidio-logo" class="footer-logo" style="width:300px; hight: 300px"/>
           <prismic-items :prismicItems="content.text2"></prismic-items>
            </b-col>
     </b-row>
   </b-container>
       <b-container style="min-height: 18vh" class="pb-4 text-center">
      <b-row align-h="center" style="min-height: 18vh">
        <b-col md="8" sm="10" align-self="center">
            </b-col>
     </b-row>
   </b-container>
             <div id="frame">
        <input type="radio" name="frame" id="frame1" checked />
        <input type="radio" name="frame" id="frame2" />
        <div id="slides">
            <div id="overflow">
                <div class="inner">
                    <div class="frame frame_1">
                        <div class="frame-content">
                           <b-container style="min-height: 18vh" class="pb-4 text-center">
      <b-row align-h="center" style="min-height: 18vh">
        <b-col md="8" sm="10" align-self="center"> <prismic-items :prismicItems="content.title3"></prismic-items>
           <prismic-items :prismicItems="content.text3"></prismic-items>
    <prismic-items :prismicItems="content.title5"></prismic-items>
<prismic-items :prismicItems="content.text5"></prismic-items>
                    <button class="button-primary"><router-link class="text-white" to="/">Explore Our Gallery</router-link></button>
                         </b-col>
     </b-row>
   </b-container>
                        </div>
                    </div>
                    <div class="frame frame_2">
                        <div class="frame-content">
                       <b-container>
    </b-container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="controls">
            <label for="frame1"></label>
            <label for="frame2"></label>
        </div>
        <div id="bullets">
            <label for="frame1"></label>
            <label for="frame2"></label>
        </div></div>
        <section>
     <b-container style="min-height: 100vh" class="pb-4 text-center">
      <b-row align-h="center" style="min-height: 100vh">
        <b-col md="8" sm="10" align-self="center">
<img :src="web" alt="web" class="web"/>
   <prismic-items :prismicItems="content.title4"></prismic-items>
           <prismic-items :prismicItems="content.text4"></prismic-items>
</b-col>
     </b-row>
   </b-container>
</section>
        </div>
</template>

<script>
import PrismicItems from '@/components/utils/PrismicItems'
export default {
  name: 'aboutus',
  components: {
    PrismicItems
  },
  props: ['aboutus'],
  data () {
    return {
      response: null,
      logo: require('@/assets/img/risidio - logo-black.svg'),
      web: require('@/assets/img/web.svg')
    }
  },
  computed: {
    content () {
      const content = this.$store.getters['contentStore/getAboutUs']
      return content
    },
    section1 () {
      const content = this.$store.getters['contentStore/getAboutUs']
      return content.section1
    }
    // bannerImage () {
    //   const content = this.$store.getters['contentStore/getAboutUs']
    //   if (!content) {
    //     return
    //   }
    //   return {
    //     'z-index': -1,
    //     padding: '0 0 0 0',
    //     height: '465px',
    //     width: '100%',
    //     'background-repeat': 'no-repeat',
    //     'background-image': `url(${content.image.url})`,
    //     'background-position': 'center center',
    //     '-webkit-background-size': 'cover',
    //     '-moz-background-size': 'cover',
    //     '-o-background-size': 'cover',
    //     'background-size': 'cover',
    //     opacity: 1
    //   }
    // },
    // tradingImage () {
    //   const content = this.$store.getters['contentStore/getAboutUs']
    //   if (!content) {
    //     return
    //   }
    //   return {
    //     'z-index': -1,
    //     padding: '0 0 0 0',
    //     height: '378px',
    //     width: '100%',
    //     'background-repeat': 'no-repeat',
    //     'background-image': `url(${content.trading[0].trading_image.url})`,
    //     'background-position': 'center center',
    //     '-webkit-background-size': 'cover',
    //     '-moz-background-size': 'cover',
    //     '-o-background-size': 'cover',
    //     'background-size': 'cover',
    //     opacity: 1
    //   }
    // }
  }
}
</script>
<style scoped >
.aboutus{
  color: rgb(0, 0, 0);
  text-align: center;
}

body {

text-align: center;

}
.h1 {
text-align: center;
font-size: 3px;
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
  max-height: 250pt;
  display: flex;
  overflow-x: auto;
text-align: center;
}
.wrapper::-webkit-scrollbar{
width:0;
}
.wrapper .item{
  min-width:11px;
  min-height:25px;
  line-height: 20px;
  text-align: center;
  margin-right: 2px;
  padding-top: 70px;
}
.item{
    color: aliceblue;
}
.bg-secondary.pt-5.d-flex.align-items-center.flex-column {
  z-index: -1;
  width: 100%;
  height: 450px;
 background-repeat: no-repeat;
 background-image: url("https://images.prismic.io/digirad/26e2345d-0e6d-434c-b342-02e91a7d921d_Group+16040.png?auto=compress,format");
  background-size: cover; opacity: 1;
  }
.wrapper1 {
  width:100%;
  height: 465px;
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1), rgba(34,14,149,1) 100%);
}
.button-primary{
  color: orange;
}
#navbar{
}
.wrapper1 {
  width:100%;
  height: 500px;
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1), rgba(34,14,149,1) 100%);
}
  #frame {
            width:100%;
  height: 465px;
            text-align: center;
        }
        #frame input[type=radio] {
            display: none;
        }
        #frame label {
            cursor: pointer;
            text-decoration: none;
        }
        .label{
          color: white;
        }
        #slides {
            position: relative;
            z-index: 1;
            width: 100%;
             height: 465px;
        }
        #overflow {
            width: 100%;
            overflow: hidden;
        }
        #frame1:checked~#slides .inner {
            margin-left: 0;
        }
        #frame2:checked~#slides .inner {
            margin-left: -100%;
        }
        #frame3:checked~#slides .inner {
            margin-left: -200%;
        }
        #frame4:checked~#slides .inner {
            margin-left: -300%;
        }
        #slides .inner {
            transition: margin-left 800ms
                cubic-bezier(0.770, 0.000, 0.175, 1.000);
            width: 400%;
            line-height: 1;
            height: 300px;
        }
        #slides .frame {
            width: 25%;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            color: #FFF;
        }
        #controls {
            margin: -180px 0 0 0;
            width: 90%;
            height: 50px;
            z-index: 3;
            position: relative;
        }
        #controls label {
            transition: opacity 0.2s ease-out;
            display: none;
            width: 50px;
            height: 50px;
            opacity: .4;
        }
          #slides .frame_1 {
             height: 465px;
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1), rgba(34,14,149,1) 100%);
}
        #slides .frame_2 {
           height: 465px;
          background: rgb(186,30,157);
background: linear-gradient(90deg, rgba(186,30,157,1) 0%, rgba(9,9,121,1) 0%, rgba(186,30,157,1) 100%);
        }
        #controls label:hover {
          color: white;
            opacity: 1;
        }
        #frame1:checked~#controls label:nth-child(2),
        #frame2:checked~#controls label:nth-child(1){
            background:
url(https://risidio-journal.cdn.prismic.io/risidio-journal/58e7d59c-1bd0-4d46-8892-35892016d808_+asset44.svg) no-repeat;
            float: right;
            margin: 0 -50px 0 0;
            display: block;
        }
        #frame1:checked~#controls label:nth-last-child(2),
        #frame2:checked~#controls label:nth-last-child(1) {
            background:
url(https://risidio-journal.cdn.prismic.io/risidio-journal/58e7d59c-1bd0-4d46-8892-35892016d808_+asset44.svg) no-repeat;
            float: left;
            margin: 0 0 0 -50px;
            display: block;
        }
        #bullets {
            margin: 150px 0 0;
            text-align: center;
        }
        #bullets label {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #ccc;
            margin: 0 10px;
        }
        #frame1:checked~#bullets label:nth-child(1),
        #frame2:checked~#bullets label:nth-child(2){
            background: #444;
        }
        @media screen and (max-width: 900px) {
            #frame1:checked~#controls label:nth-child(2),
            #frame2:checked~#controls label:nth-child(3),
            #frame3:checked~#controls label:nth-child(4),
            #frame4:checked~#controls label:nth-child(1),
            #frame1:checked~#controls label:nth-last-child(2),
            #frame2:checked~#controls label:nth-last-child(3),
            #frame3:checked~#controls label:nth-last-child(4),
            #frame4:checked~#controls label:nth-last-child(1) {
                margin: 0;
            }
            #slides {
                max-width: calc(100% - 140px);
                margin: 0 auto;
            }
        }
        .footer-logo{width:300px;
        height: 300px;}
</style>
