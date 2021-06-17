<template>
  <header id="header" :class="{'scrolled': scrollClass}">
    <div class="navbar_container">
      <div class="nav_logo">
        <r-logo></r-logo>
      </div>

      <div class="nav_comp">

        <button @click="applyNow()" class="r_btn_primary" ><span>Apply Now</span></button>


        <button class="nav_togler" @click="navOpen()" :class="{active_ : navOpenClass}">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <transition name="navAnim">
      <r-navbar v-if="navOpenClass" @close="navOpen()"></r-navbar>
    </transition>

  </header>
</template>

<script>
  import logo from "@/components/frontend/common/logo"
  import navbar from "@/components/frontend/common/navbar"

  export default {
    components: {
      'r-logo': logo,
      'r-navbar': navbar
    },
    data() {
      return {
        navOpenClass: false,
        scrollClass: false
      }
    },
    methods: {
      navOpen() {
        this.navOpenClass = !this.navOpenClass
      },
      updateScroll() {
        if(window.scrollY > 150){
          this.scrollClass = true
        }else{
          this.scrollClass = false
        }
      },
      applyNow() {
        this.$emit('openForm')
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    }
  }
</script>


<style lang="scss" scoped>

  @import "assets/styles/frontend-components/variables";

  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    z-index: 99;
    transition: all 0.3s ease;


    @media only screen and (min-width: 1377px) and (max-width:1680px) {
      height: 110px;
    }

    @media only screen and (min-width: 1025px) and (max-width: 1376px) and (min-height: 500px) and (max-height: 940px) {
      height: 100px;
    }

    @media only screen and (max-width:1024px){
      height: 80px;
    }

    .navbar_container{
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media only screen and (max-width:1024px){
        padding: 1rem .5rem;
      }

      .nav_logo{
        position: relative;
        display: block;
        height: 100%;
        width: auto;

        @media only screen and (max-width:1024px){
          width: 70px;
          height: auto;
        }
      }

      .nav_comp{
        position: relative;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 1.5rem;
        align-items: center;
      }
    }


    .nav_togler{
      position: relative;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-direction: column;

      span{
          position: relative;
          width: 2vw;
          height: 0.25vw;
          border-radius: 5px;
          background: $color-white;
          transform-origin: right;
          transition: all 0.3s ease;
          margin: 0.25vw 0;

          @media only screen and (max-width:1024px){
            width: 40px;
            height: 5px;
            margin: 4px ;
          }

          &:nth-child(1){

          }

          &:nth-child(2){
            transform: scaleX(0.75);

            &:before, &:after{
              content:'';
              position: absolute;
              width: 100%;
              top: 0;
              left: 0;
              height: 5px;
              border-radius: 5px;
              background: $color-white;
              transform-origin: center;
              transition: all 0.3s ease;
              opacity: 0;
            }

          }

          &:nth-child(3){
            transform: scaleX(0.5);
          }



      }

      &:not(.active_){
        &:hover{
        span{
          &:nth-child(1){
            transform: scaleX(0.5);
          }

          &:nth-child(2){
            transform: scaleX(0.75);
          }

          &:nth-child(3){
            transform: scaleX(1);
          }
        }
        }
      }

      &.active_{
        span{
          transform-origin: center;
           &:nth-child(1){
            transform: scaleX(1) translateY(100%);
            opacity: 0;
          }

          &:nth-child(2){
            background-color: transparent;

            &:before{
              transform: rotate(35deg);
              opacity: 1;
            }

             &:after{
              transform: rotate(-35deg);
              opacity: 1;
            }
          }

          &:nth-child(3){
            transform: scaleX(1) translateY(-100%);
            opacity: 0;
          }

        }
      }


    }

    &.scrolled{
      background-color: $color-black;
      height: 90px;

      @media only screen and (max-width:1024px){
        height: 70px;
      }

      @media only screen and (max-width:767px){
        height: 80px;
      }

    }

  }


</style>

