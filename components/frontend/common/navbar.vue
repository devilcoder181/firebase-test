<template>
  <div class="navbar_megamenu">

    <div class="bg_" :style="{ backgroundImage: `url(${backgroundUrl})` }"></div>

    <nav class="navbar_">
      <ul>
        <li class="nav_item" v-for="navName in navData" :key='navName.index' @click="closeNav">
          <nuxt-link class="nav_link"  :to="navName.urlLink" >{{navName.name}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import backgroundUrl from "~/assets/images/word.svg";
  export default {
    data() {
      return {
        navData: [
          {name: 'Home', urlLink: '/'},
          {name: 'About Us', urlLink: '/#about'},
          {name: 'Assistance We Provide', urlLink: '/#assistance'},
          {name: 'Training Courses', urlLink: '/#courses'},
          {name: 'Testimonials', urlLink: '/#testimonials'},
          {name: 'Gallery', urlLink: '/#gallery'},
          {name: 'Contact', urlLink: '/#contact'}
        ],
        backgroundUrl
      }
    },
    methods: {
      closeNav() {
        this.$emit('close')
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "assets/styles/frontend-components/variables";

  .navbar_megamenu{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;

    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }



    .bg_{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: bottom;
        background-size: 75%;
        background-repeat: no-repeat;
        z-index: 2;
        opacity: 0.2;
    }

    .navbar_{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      height: 100%;
      padding: 130px 10vw 5vw;


      &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-primary;
      transform-origin: top;
    }

    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-dark;
      transform-origin: top;
    }

      ul{
        position: relative;
        list-style: none;
        padding: 0;
        margin: 0;
        z-index: 2;

        .nav_item{
          position: relative;

          @media only screen and (max-width:767px){
            margin: 1em 0;
          }

          @media only screen and (min-width: 768px) and (max-width:1024px) {
            margin: 1em 0;
          }

          .nav_link{
            position: relative;
            display: block;
            font-size: 3vw;
            font-weight: bold;
            color: $color-primary;
            text-decoration: none;
            text-transform: uppercase;
            transition: all 0.3s ease;
            &:hover, &:focus, &.nuxt-link-exact-active{
              color: $color-white;
            }

            @media only screen and (min-width: 768px) and (max-width:1024px) {
              font-size: 5vw;
            }

            @media only screen and (max-width:767px){
                  font-size: 9vw;
            }

          }
        }

      }
    }

    &.navAnim-enter{


      .bg_{
         opacity: 0;
      }

      .navbar_{
         &:before{
          transform: scaleY(0);
        }
        &:after{
          transform: scaleY(0);
        }

        ul{
          .nav_item{
            transform: translateX(100%);
            opacity: 0;
          }
        }
      }
    }

    &.navAnim-enter-active{
      transition-delay: 3000ms;

      .navbar_{
        &:before{
        transition: transform 0.6s cubic-bezier(.33,1,.68,1) 0s;
        }
        &:after{
          transition: transform 0.6s cubic-bezier(.33,1,.68,1) 0.2s;
        }
        ul{
          .nav_item{
            transition: transform 0.4s cubic-bezier(.33,1,.68,1) 2s,opacity .4s cubic-bezier(.33,1,.68,1) 2s;
            @for $i from 1 through 8 {
              &:nth-child(#{$i}) {
                transition-delay: #{$i*0.15s + 0.4s};
              }
            }
          }
        }
      }

      &:before{
        transition: transform 2s cubic-bezier(.33,1,.68,1) 0s;
      }

      .bg_{
        transition: transform 0.6s cubic-bezier(.33,1,.68,1),opacity .6s cubic-bezier(.33,1,.68,1);
        transition-delay: 0.4s;
      }


    }

    &.navAnim-leave-active{
      transition: all 3s ease;

       &:before{
        transition: transform 2s cubic-bezier(.33,1,.68,1) 0s;
      }

      .bg_{
         transition: transform 0.6s cubic-bezier(.33,1,.68,1),opacity .6s cubic-bezier(.33,1,.68,1);
        transition-delay: 0.2s;
      }

      .navbar_{
        &:before{
          transition: transform 0.6s cubic-bezier(.33,1,.68,1) 1s,opacity .6s cubic-bezier(.33,1,.68,1) 1s;
        }
        &:after{
          transition: transform 0.6s cubic-bezier(.33,1,.68,1) 0.8s,opacity .6s cubic-bezier(.33,1,.68,1) 0.8s;
        }
        ul{
          .nav_item{
            transition: transform 0.4s cubic-bezier(.33,1,.68,1) 0s,opacity .4s cubic-bezier(.33,1,.68,1) 0s;
            @for $i from 1 through 8 {
              &:nth-child(#{$i}) {
                transition-delay: #{$i*0.1s + 0s};
              }
            }
          }
        }
      }

    }

    &.navAnim-leave-to{


      .bg_{
         opacity: 0;
      }

      .navbar_{
          &:before{
            transform: scaleY(0);
          }
          &:after{
            transform: scaleY(0);
          }
        ul{
          .nav_item{
            transform: translateX(100%);
            opacity: 0;
          }
        }
      }
    }
  }



</style>
