<template>
  <div class="social_wrapper">
    <ul>

      <li v-if="socialContent.facebook != null">
        <a target="blank_" :href="socialContent.facebook" title="Facebook" class="social_link"><i class="icon icon-facebook"></i></a>
      </li>

      <li v-if="socialContent.instagram != null">
        <a target="blank_" :href="socialContent.instagram" title="Instagram" class="social_link"><i class="icon icon-insta"></i></a>
      </li>

      <li v-if="socialContent.twitter != null">
        <a target="blank_" :href="socialContent.twitter" title="Twitter" class="social_link"><i class="icon icon-twitter"></i></a>
      </li>

      <li v-if="socialContent.linkedin != null">
        <a target="blank_" :href="socialContent.linkedin" title="Linked In" class="social_link"><i class="icon icon-linkedin"></i></a>
      </li>

      <li v-if="socialContent.whatsapp != null">
        <a target="blank_" :href="`https://api.whatsapp.com/send?phone=${socialContent.whatsapp}`" title="Whatsapp" class="social_link"><i class="icon icon-whatsapp"></i></a>
      </li>

      <li v-if="socialContent.youtube != null">
        <a target="blank_" :href="socialContent.youtube" title="Youtube" class="social_link"><i class="icon icon-youtube"></i></a>
      </li>

    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

  export default {
    // data() {
    //   return {
    //     social: [
    //       {name: 'Facebook', sLink: 'https://www.facebook.com/Rian.aviation/', iconClass: 'icon icon-facebook'},
    //       {name: 'Instagram', sLink: 'https://www.instagram.com/rian_air/', iconClass: 'icon icon-insta'},
    //       // {name: 'Youtube', sLink: '', iconClass: 'icon icon-youtube'},
    //       {name: 'Twitter', sLink: 'https://twitter.com/RianAir16?s=08', iconClass: 'icon icon-twitter'},
    //       {name: 'Linked In', sLink: 'https://www.linkedin.com/in/rian-air-7b5a29213', iconClass: 'icon icon-linkedin'},
    //       {name: 'Whatsapp', sLink: 'https://api.whatsapp.com/send?phone=+00917277477377', iconClass: 'icon icon-whatsapp'}
    //     ]
    //   }
    // },
    computed: {
       ...mapGetters(['socialContent']),
    }
  }
</script>

<style lang="scss" scoped>
  @import "assets/styles/frontend-components/variables";

  .social_wrapper{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 99;



    ul{
      position: relative;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      li{
        position: relative;
        display: block;
        padding: 0.5em 1em;

        a{
          display: block;
          text-decoration: none;
          color: $color-white;
          font-size: 1.2vw;
          transition: all 0.3s ease;
          transform-origin: center;

          @media only screen and (max-width:1024px){
            font-size: 22px;
          }

          &:hover, &:focus, &:active{
            color: $color-primary;
            transform: scale(1.1);
          }
        }
      }
    }

     @media only screen and (max-width:767px){
      bottom: 0;
      top: auto;
      width: 100%;
      height: auto;
      background: $color-dark;

      ul{
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;

        li{
          padding-bottom: 0;
          a{
            color: $color-primary;
            font-size: 24px;


          }
        }
      }
    }
  }
</style>
