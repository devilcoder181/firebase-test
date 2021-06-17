<template>
  <div class="item_img_box" @click="open()">
    <div class="img_" :style="{backgroundImage: `url(${img})`}"></div>
  </div>
</template>

<script>


export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    }
  },
  methods: {
    open() {
      this.$emit('modalOpen')
      this.$emit('currentId', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .item_img_box{
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding-top: 150%;
    overflow: hidden;
    filter: grayscale(1);
    cursor: pointer;
    transition: all 1s ease;

    &:before{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
      z-index: 1;
      transition: all 0.3s ease;
    }

    .img_{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
    }

    &:hover{
      filter: grayscale(0);
    }
  }
</style>
