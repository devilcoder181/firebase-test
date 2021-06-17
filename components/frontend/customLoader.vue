<template >
  <div  class="main_loader">
    <div class="logo_box">
      <img src="~/assets/images/logo-white.svg" title="RianAir">
    </div>

    <p>Loading...</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "assets/styles/frontend-components/variables";

  .main_loader{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;


    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-primary;
      z-index: 0;
    }

    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-black;
      z-index: 0;
    }

    .logo_box{
      position: relative;
      display: block;
      width: 180px;
      height: 180px;
      z-index: 1;

      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 5px solid $color-primary;
        opacity: 0.35;
        transform-origin: center;
        animation: loaderAnim 1s ease infinite;
      }

      @media only screen and (max-width:1024px){
        width:150px;
        height:150px;
      }

      img{
        width: 100%;
      }
    }

    p{
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 2vw;
      color: $color-white;
      transform: translateX(25%);
      z-index: 1;
    }

    &.loader-leave-active{
      transition-delay: 1s;
      &:before{
        transition: opacity 0.6s cubic-bezier(.33,1,.68,1) 0.2s;
      }
      &:after{
        transition: opacity 0.6s cubic-bezier(.33,1,.68,1) 0s;
      }

      .logo_box{
        transition: all 0.3s cubic-bezier(.33,1,.68,1) 0s;
      }

      p{
        transition: all 0.3s cubic-bezier(.33,1,.68,1) 0s;
      }
    }

    &.loader-leave-active{
      &:before{
        opacity: 0;
      }
      &:after{
        opacity: 0;
      }

      .logo_box{
        transform: scale(0.6);
        opacity: 0;
      }

      p{
        transform: translateX(-100%);
        opacity: 0;
      }
    }

  }

  @keyframes loaderAnim {
    from{
      opacity: 0.35;
      transform: scale(0.2);
    }
    to{
      opacity: 0;
      transform: scale(1.5);
    }
  }
</style>
