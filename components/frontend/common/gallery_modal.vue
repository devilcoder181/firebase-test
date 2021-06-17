<template>
  <div class="dng-modal">

    <button class="btn_close" @click="closeModal()"></button>


    <div class="modal_overlay" @click="closeModal()"></div>

    <div class="dng-modal-base">
       <div class="img_box">
         <img :src="img" alt="Gallery">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img:{
      type:String,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/frontend-components/variables";
  .dng-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn_close{
      z-index: 1;
    }

    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .modal_overlay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $color-black;
      opacity: 0.8;
    }

    .img_box{
      position: relative;
      width: auto;
      height: 70%;
      display: inline-block;
    }

    .dng-modal-base{
      position: relative;
      max-width:75%;
      min-width:75%;
      display: block;
      text-align: center;

      @media only screen and (min-width:768px) and (max-width:1024px){
        max-width:85%;
        min-width:85%;
      }

      @media only screen and (max-width:767px){
        max-width:92.5%;
        min-width:92.5%;
      }

    }


  &.modal-enter{
      .modal_overlay{
        opacity: 0;
      }

      .img_box{
        transform: scale(0.6);
        opacity: 0;
      }
  }

  &.modal-enter-active{
    transition-delay: 300ms;
      .modal_overlay{
        transition: all 0.3s cubic-bezier(.33,1,.68,1) 0s;
      }

      .img_box{
        transition: all 0.3s cubic-bezier(.33,1,.68,1) 0s;
      }
  }

  &.modal-leave-active{
      transition: all 0.3s ease;

       .modal_overlay{
        transition: all 0.2s cubic-bezier(.33,1,.68,1) 0s;
      }

      .img_box{
        transition: all 0.2s cubic-bezier(.33,1,.68,1) 0s;
      }
  }

  &.modal-leave-to{
       .modal_overlay{
        opacity: 0;
      }

      .img_box{
        transform: scale(0.6);
        opacity: 0;
      }
    }
  }

</style>
