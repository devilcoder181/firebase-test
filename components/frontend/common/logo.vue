<template>
  <nuxt-link to="/" class="nav_logo_link">
    <img src="logo-white.svg" title="RianAir - The Sky is Ours" alt="RianAir - The Sky is Ours">
  </nuxt-link>
</template>

<style lang="scss" scoped>
  .nav_logo_link{
    position: relative;
    width: auto;
    height: 100%;
    display: block;

    @media only screen and (max-width:1024px){
      height: auto;
      width: 100%;
    }

    img{
      width: auto;
      height: 100%;

      @media only screen and (max-width:1024px){
      height: auto;
      width: 100%;
      }
    }
  }
</style>
