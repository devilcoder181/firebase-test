<template>
  <div class="dng-modal">

    <button class="btn_close" @click="closeModal()"></button>


    <div class="modal_overlay" @click="closeModal()"></div>

    <div class="dng-modal-base">
        <div class="assistance_content">
          <div class="left_">
            <div class="img_box">
              <div class="img_" :style="{backgroundImage: `url(${img}`}"></div>
            </div>
            <h3>{{name}}</h3>
            <p>{{desc}}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id:{
      type:Number,
      required: true
    },
     name: {
      type:String,
      required: true
    },
    desc: {
      type:String,
      required: true
    },
    img: {
      type:String,
      required: true
    },
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

    .dng-modal-base{
      position: relative;
      max-width:50%;
      min-width:50%;
      display: block;

      @media only screen and (min-width:768px) and (max-width:1024px){
        max-width:85%;
        min-width:85%;
      }

      @media only screen and (max-width:767px){
        max-width:92.5%;
        min-width:92.5%;
      }

    }

  .assistance_content{
      position: relative;
      display: grid;
      grid-template-columns: 1fr;

      @media only screen and (max-width:767px){
        grid-template-columns:1fr;
      }

      .left_{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        padding: 2em;
        background: $color-black;

        @media only screen and (max-width:767px){
          padding: 4em 2em;
        }

        .img_box{
          position: relative;
          width: 6vw;
          height: 6vw;
          border-radius: 50%;
          border: 2px dotted $color-primary;
          margin-bottom: 1.5em;

          @media only screen and (max-width:766px){
            width: 20vw;
            height: 20vw;
          }

          .img_{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: top;
            transform-origin: center;
            transform: scale(0.9);
            border-radius: 50%;
          }
        }

        i{
          display: contents;
          font-size: 7.5vw;

          @media only screen and (max-width:1024px){
            font-size: 50px;
          }
        }

         h3{
          margin-top: 0;
          font-size: 1.25vw;
          margin-bottom: 0.25em;

           @media only screen and (max-width:1024px){
            font-size: 18px;
          }
        }

        p{
          margin-top: 0;
          font-size: 0.9vw;
          line-height: 2;

           @media only screen and (max-width:1024px){
            font-size: 16px;
          }
        }
      }


    }

  &.modal-enter{
      .modal_overlay{
        opacity: 0;
      }

      .assistance_content{
        transform: scale(0.6);
        opacity: 0;
      }
  }

  &.modal-enter-active{
    transition-delay: 300ms;
      .modal_overlay{
        transition: all 0.3s cubic-bezier(.33,1,.68,1) 0s;
      }

      .assistance_content{
        transition: all 0.3s cubic-bezier(.33,1,.68,1) 0s;
      }
  }

  &.modal-leave-active{
      transition: all 0.3s ease;

       .modal_overlay{
        transition: all 0.2s cubic-bezier(.33,1,.68,1) 0s;
      }

      .assistance_content{
        transition: all 0.2s cubic-bezier(.33,1,.68,1) 0s;
      }
  }

  &.modal-leave-to{
       .modal_overlay{
        opacity: 0;
      }

      .assistance_content{
        transform: scale(0.6);
        opacity: 0;
      }
    }
  }

</style>
