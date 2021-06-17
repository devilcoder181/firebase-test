<template>
  <section class="home_view bg_blue" id="about" v-in-viewport>

    <div class="bg_world"></div>
    <div class="bg_plane"></div>

    <div class="r_container">
      <div class="about_wrapper">
        <div class="section_title">
          <h2><span>{{aboutText.title}}</span></h2>
        </div>
        <p>{{aboutText.homeContent}}</p>

        <div class="btn_group">
          <nuxt-link to="/about" class="r_btn_primary white_"><span>Read More</span></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
       ...mapGetters(['aboutText']),
    }
}
</script>

<style lang="scss" scoped>

  .bg_world{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50vw;
    height: 100%;
    background-image: url('~assets/images/word.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(15%) scale(0.7);
    transition: all 0.8s cubic-bezier(.33,1,.68,1);
    transform-origin: center;
    opacity: 0;

    @media only screen and (max-width:767px){
      width: 100vw;
    }
  }

  .bg_plane{
    position: absolute;
    top: 0;
    right: 0;
    width: 40vw;
    height: 40vw;
    background-image: url('~assets/images/plane.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(100%) translateY(-50%);
    transition: all 0.8s cubic-bezier(.33,1,.68,1);
    transform-origin: center;
    opacity: 0;
    //transform: translateX(15%);

    @media only screen and (max-width:767px){
      display: none;
    }
  }

  .about_wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;

    @media only screen and (max-width:767px){
      width: 100%;
    }

    p{
      margin: 0;
      font-size: 1.2vw;
      font-weight: 400;
      line-height: 1.8;
      margin-bottom: 0.25em;
      transform-origin: top;
      transform: translateY(50%);
      transition: all 0.8s cubic-bezier(.33,1,.68,1);
      opacity: 0;

      @media only screen and (max-width:1024px){
        font-size: 16px;
      }

    }

    .btn_group{
       transform-origin: top;
        transform: translateY(100%);
        transition: all 0.8s cubic-bezier(.33,1,.68,1);
        opacity: 0;
    }
  }

  .home_view {
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0F0F0F;
      z-index: 9;
      transition: transform 1.2s cubic-bezier(.33,1,.68,1) .6s,-webkit-transform 1.2s cubic-bezier(.33,1,.68,1) .6s;
      transform-origin: right;
    }
    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      z-index: 10;
      transition: transform 1.2s cubic-bezier(.33,1,.68,1) .4s,-webkit-transform 1.2s cubic-bezier(.33,1,.68,1) .4s;
      transform-origin: right;
    }
    &.dng-view-anim, &.in-viewport{
      &:before, &:after{
        transform: scaleX(0);
      }
      .bg_world{
        transform: translateX(15%) scale(1);
        opacity: 1;
        transition-delay: 1.4s;
      }
      .bg_plane{
        transform: translateX(15%) scale(1);
        opacity: 1;
        transition-delay: 1.6s;
      }
      .about_wrapper{
        p{
          transform: none;
          transition-delay: 1s;
          opacity: 1;
        }
        .btn_group{
           transform: none;
          transition-delay: 1.2s;
          opacity: 1;
        }
      }
    }
  }
</style>
