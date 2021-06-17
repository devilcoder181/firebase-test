<template>
  <div class="title_wrapper">
      <div class="section_title color_blue">
        <h2><span>{{pageTitle}}</span></h2>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: {
        type:String,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title_wrapper{
    position: relative;
    display: block;
    transition: all 0.8s cubic-bezier(.33,1,.68,1) 0.6s;
    transform: translateY(100%);
    opacity: 0;
  }
  main{
    &.loaded_{
      .title_wrapper{
        transform: none;
        opacity: 1;
      }
    }
  }
</style>
