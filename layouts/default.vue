<template>
  <main :class="{'loaded_' : !loaded}">
    <transition name="loader">
      <r-loader v-if="loaded"></r-loader>
    </transition>
    <r-header @openForm="showForm = !showForm" ></r-header>
    <r-social></r-social>
    <Nuxt />
    <r-footer></r-footer>

    <FrontendCommonLoader v-if="activateLoader"></FrontendCommonLoader>
    <transition name="alertAnim">
      <FrontendCommonSuccess v-if="successAlert"></FrontendCommonSuccess>
    </transition>

    <transition name="modal" v-if="showForm">
      <apply-now @closeModal="showForm = !showForm"></apply-now>
    </transition>

  </main>
</template>

<script>
  import header from '@/components/frontend/common/header'
  import social from '@/components/frontend/common/social'
  import footer from '@/components/frontend/common/footer'
  import rLoader from '@/components/frontend/customLoader'
  import applyNow from '@/components/frontend/common/apply_now'
  //import loader from '../components/frontend/customLoader'
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        loaded: {
          type: Boolean
        },
        showForm: false,
      }
    },
    computed: {
     ...mapGetters(['activateLoader', 'successAlert']),
    },
    components: {
      'r-header': header,
      'r-social': social,
      'r-footer': footer,
      'r-loader' : rLoader,
      'apply-now' : applyNow,
    },
    methods: {
    },
    mounted() {
      if (process.browser) {
        window.onNuxtReady((app) => {
          this.loaded = false
        })
      }else{
        this.loaded = true
      }
    }
  }
</script>

<style lang="scss">
  .dng-anim-enter-active, .dng-anim-leave-active {
    transition: opacity .5s;

    &.inner_page{
      .section_title{
        transition: all 0.8s cubic-bezier(.33,1,.68,1) 0.5s;
      }
    }

   }
  .dng-anim-enter, .dng-anim-leave-active {
    opacity: 0;

    &.inner_page{
      .section_title{
        transform-origin: top;
        transform: translateY(50%);
        opacity: 0;
      }


    }

  }

  .inner_page{

    .breadcrumb_{
        transform-origin: top;
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.8s cubic-bezier(.33,1,.68,1) 0.7s;
      }

      .courses_content_wrapper .img_wrapper{
          transform-origin: top;
          transform: translateY(50%);
          opacity: 0;
          transition: all 0.8s cubic-bezier(.33,1,.68,1) 0.9s;
      }

      .courses_content_wrapper .content_wrapper{
         transform-origin: top;
          transform: translateY(50%);
          opacity: 0;
          transition: all 0.8s cubic-bezier(.33,1,.68,1) 1s;
      }

      .text_area{
        p{
           transform-origin: top;
            transform: translateY(100%);
            opacity: 0;
            transition: all 0.8s cubic-bezier(.33,1,.68,1);

            @for $i from 1 through 10 {
              &:nth-child(#{$i}) {
                transition-delay: #{$i * 0.2s + 0.7s};
              }
            }
        }
      }

      .about_widget .item_{
        transform-origin: top;
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.8s cubic-bezier(.33,1,.68,1);

        @for $i from 1 through 3 {
              &:nth-child(#{$i}) {
                transition-delay: #{$i * 0.2s + 0.9s};
              }
            }
      }

      .assistance_list{
        .a_item_{
          transform-origin: top;
          transform: translateY(100%);
          opacity: 0;
          transition: all 0.6s cubic-bezier(.33,1,.68,1);

          @for $i from 1 through 12 {
              &:nth-child(#{$i}) {
                transition-delay: #{$i * 0.2s + 0.7s};
              }
          }
        }
      }

      .courses_wrapper{
        .item_, .testi_item{
          transform-origin: top;
          transform: translateY(100%);
          opacity: 0;
          transition: all 0.6s cubic-bezier(.33,1,.68,1);

          @for $i from 1 through 12 {
              &:nth-child(#{$i}) {
                transition-delay: #{$i * 0.2s + 0.7s};
              }
          }
        }
      }

      .gallery_wrapper{
        .item_{
          transform-origin: top;
          transform: translateY(100%);
          opacity: 0;
          transition: all 0.6s cubic-bezier(.33,1,.68,1);

          @for $i from 1 through 12 {
              &:nth-child(#{$i}) {
                transition-delay: #{$i * 0.2s + 0.7s};
              }
          }
        }
      }

    &.in-viewport{
      .courses_content_wrapper .img_wrapper, .courses_content_wrapper .content_wrapper, .breadcrumb_, .about_widget .item_, .assistance_list .a_item_, .courses_wrapper .item_, .courses_wrapper .testi_item, .gallery_wrapper .item_{
        transform: none;
        opacity: 1;
      }

      .text_area{
        p{
          transform: none;
          opacity: 1;
        }
      }
    }

  }



</style>

