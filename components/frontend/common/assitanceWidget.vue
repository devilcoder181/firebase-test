<template>

  <div class="a_item_" @click="showModal">
    <div class="icon_">
      <i :class="icon"></i>
    </div>

    <div class="name_"><span>{{name}}</span></div>
  </div>

</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    showModalInner: false,
  },
  methods: {
    showModal(event) {
      this.$emit('openModal'),
      this.$emit('currentId', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/frontend-components/variables";


  .a_item_{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    //width: 100%;
    flex-wrap: wrap;
    cursor: pointer;
    background-color:$color-dark;
    padding: 0 2em;
    height: 100%;
    transition: all 0.3s ease;
    border-radius: 2em;
    border: 2px solid $color-black;

    @media only screen and (max-width:1024px){
      padding: 0 1em;
    }

    @media only screen and (max-width:767px){
      padding: 0 1em 2em;
    }
    .icon_{
      position: relative;
      display: flex;
      width: 6vw;
      height: 6vw;
      border-radius: 1em;
      background: $color-white;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      margin: 3em 0 1em;

      i{
        color: $color-primary;
        font-size: 3.5vw;
        display: contents;
        transition: all 0.3s ease;
      }

      @media only screen and (max-width:1024px){
        width: 80px;
        height: 80px;

        i{
          font-size: 32px;
        }
      }

    }

    .name_{
      display: block;
      position: relative;
      text-align: center;
      width: 100%;
      font-size: 1.1vw;
      font-weight: 400;
      line-height: 1.8;

      @media only screen and (max-width:1024px){
        font-size: 18px;
      }
    }

    &:hover, &:focus{
      border-color: $color-primary;
      .icon_{
        background-color: $color-primary;
        i{
          color: $color-white;
        }
      }
    }
  }
</style>
