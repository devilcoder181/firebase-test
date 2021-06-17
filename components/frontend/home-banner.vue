<template>
  <section class="r_section_banner">

    <div class="globe_">
      <div class="svg_">
        <globeItem></globeItem>
      </div>
    </div>

    <div class="banner_wrapper">
      <div class="banner_content">
        <h1>
          <span>{{bannerContent.top}}</span>
          <span v-html="bannerContent.main"></span>
        </h1>
        <h3>{{bannerContent.sub}}</h3>
      </div>

      <div class="widget_slide">
         <swiper ref="mySwiper" :options="swiperOptions" :slides-per-view="3">
            <swiper-slide v-for="(item, index) in testiContent" :key="index">
              <div class="widget_item">
                <div class="content_">
                  <p>{{item.description}}</p>
                  <strong> - {{item.name}}</strong>
                </div>

                <div class="img_">
                  <nuxt-img :src="item.image" :alt="item.name" />
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/core'
import 'swiper/swiper-bundle.css'
import globeItem from '@/components/frontend/common/globe.vue'

SwiperClass.use([Pagination, Mousewheel, Autoplay])

export default {
  data() {
    return {
      // bannerText: {
      //   firstTitle: 'Welcome To',
      //   secondTitle: 'Rian<strong>Air</strong>',
      //   titleDesc: 'Where Dreams Take Flight'
      // },
      swiperOptions: {
          spaceBetween: 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination'
          },

          // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    ...mapGetters(['bannerContent', 'testiContent']),
  },
  components: {
    Swiper,
    SwiperSlide,
    globeItem
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="scss">
  @import "assets/styles/frontend-components/variables";

  .r_section_banner{
    position: relative;
    width:100%;
    height: 100vh;
    overflow: hidden;

    @media only screen and (min-width: 768px) and (max-width:1024px) {
      height: 60vh;
    }

    // &:before{
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: rgb(0,0,0);
    //   background: linear-gradient(118deg, black 25%, #0a7ee8 100%);
    //   opacity: 0.6;
    // }

    .banner_wrapper{
      position: relative;
      display: flex;
      flex-direction: column;
      padding-left: 10vw;
      align-items: flex-start;
      justify-content: flex-end;
      height: 100%;
      width: 32.5vw;
      padding-bottom: 3vw;
      z-index: 1;

      @media only screen and (min-width: 768px) and (max-width:1024px) {
        width: 70%;
        padding-bottom: 1.5em;
      }

      @media only screen and (max-width:767px){
        width: 100%;
        padding: 0 1em;
        padding-bottom: 2.5em;
      }

      .banner_content{
        position: relative;
        display: block;

        h1{
          display: block;
          margin: 0;
          line-height: 1.4;
          text-transform: uppercase;
          span{
            display: block;
            opacity: 0;
            transform: translateY(50%);
            transition: all 0.6s cubic-bezier(.33,1,.68,1);

            &:nth-child(1){
              font-weight: 500;
              font-size: 2.5vw;
              transition-delay: 0.6s;

               @media only screen and (max-width:1024px){
                font-size: 40px;
              }
            }
             &:nth-child(2){
              font-weight: 600;
              font-size: 5.5vw;
              transition-delay: 0.7s;


              @media only screen and (max-width:1024px){
                font-size: 48px;
              }
            }
          }
        }

        h3{
          display: block;
          margin: 0;
          font-size: 1.5vw;
          opacity: 0.57;
          font-weight: 500;
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.6s cubic-bezier(.33,1,.68,1);
          transition-delay: 0.8s;
          color: $color-secondary;
          text-transform: uppercase;
        letter-spacing: 3px;

          @media only screen and (max-width:1024px){
            font-size: 24px;
          }
        }
      }
    }
  }
  .widget_slide{
    position: relative;
    display: block;
    margin-top: 6.5vw;
    width: 100%;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.6s cubic-bezier(.33,1,.68,1);
    transition-delay: 1s;

    @media only screen and (max-width:1024px){
       margin-top: 50px;
    }
  }
  .widget_item{
    position: relative;
    //width: 100%;
    padding: 2em;
    border-radius: 1.5em;
    background: rgb(10,126,232);
    background: linear-gradient(132deg, rgba(10,126,232,1) 0%, rgba(6,191,234,1) 100%, rgba(255,255,255,1) 100%);
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 15px;

    .content_{
      position: relative;
      p,strong{
        font-size: 0.75vw;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;

        @media only screen and (max-width:1024px){
          font-size: 14px;
        }
      }

      strong{
        font-style: italic;
        margin-top: 1em;
        display: block;

      }
    }

    .img_{
      position: relative;
      width: 3vw;
      height: 3vw;
      border-radius: 50%;
      overflow: hidden;
      border:2px solid $color-secondary;

      @media only screen and (max-width:1024px){
        width: 50px;
        height: 50px;
      }

      img{
        width: 100%;
      }

    }
  }

  .swiper-pagination {
      position: relative;
      margin-top: 1.5rem;

      .swiper-pagination-bullet-active {
        background: #fff;
      }

      .swiper-pagination-bullet {
        background: #fff;
      }

    }


  .banner_content strong {
    color: #0a8ae9;
    font-weight: 600;
  }

  .globe_ {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    z-index: 14;
    z-index: 0;

    @media only screen and (max-width:767px){
      opacity: 0.15;
    }
}

.svg_ {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    transform: rotate(-7deg) scale(1.2) translateX(20%);
    transition: all 2s cubic-bezier(.33,1,.68,1);
}

.svg_ svg {
    width: auto;
    height: 100%;
    transform-origin: right;
    transform: scale(1.1);
}

main{
  &.loaded_{
    .r_section_banner{
      .banner_wrapper{
        .banner_content{
          h1 span,h3{
            transform: none;
            opacity: 1;
          }
        }
      }
    }

    .widget_slide{
      transform: none;
      opacity: 1;
    }

    .globe_{
      .svg_{
        transform: none;
        opacity: 1;
      }
    }
  }


}

</style>
