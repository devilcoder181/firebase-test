<template>
  <div class="item_">
    <nuxt-link :to="'/programs/'+ id" class="link_">
      <div class="img_box">
        <div class="img_" :style="{backgroundImage: `url(${image}`}"></div>

        <div class="content_">
          <div class="name_">
            <h3>{{name}}</h3>
            <span></span>
          </div>
          <i class="icon icon-arrow-pointing-to-left-inside-a-circle"></i>
        </div>
      </div>
    </nuxt-link>
  </div>

</template>

<script>
export default {
  props: {
    name:{
      type: String,
      required: true
    },
    image:{
      type: String,
      required: true
    },
    id: {
      type:String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "assets/styles/frontend-components/variables";

  .item_{
    position: relative;
    display: block;

    .link_{
      position: relative;
      display: flex;
      overflow: hidden;
      border-radius: 1.5em;
      color: $color-white;

      .img_box{
        position: relative;
        display: block;
        width: 100%;
        height: 0;
        padding-top: 60%;

        &:before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .content_{
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          padding: 1em;
          display: grid;
          grid-template-columns: 1fr auto;
          grid-gap: 1em;
          align-items: center;
          z-index: 2;

          span{
            display: block;
            position: relative;
            width: 0.4vw;
            height: 0.4vw;
            border-radius: 50%;
            background-color: $color-white;

            &:before, &:after{
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 0.4vw;
              height: 0.4vw;
              border-radius: 50%;
              background-color: $color-white;
            }

            &:before{
              transform: translateX(150%);
            }

            &:after{
              transform: translateX(300%);
            }

            @media only screen and (max-width:1024px){
              width: 7px;
              height: 7px;

              &:before, &:after{
                width: 7px;
                height: 7px;
              }
            }

          }

          h3{
            font-weight: 500;
            margin: 0;
            font-size: 1.2vw;
            margin-bottom: 0.25em;
            @media only screen and (max-width:1024px){
              font-size: 20px;
            }
          }

          i{
            font-size: 1.2vw;
            display: block;
            transition: all 0.3s ease;
            transform: translateY(100%);
            opacity: 0;
            @media only screen and (max-width:1024px){
              font-size: 20px;
            }
          }
        }
      }

      &:hover{
        .img_box{
          &:before{
            background: $color-primary;
            background: linear-gradient(0deg, #0a8ae9 0%, rgba(0,0,0,0) 100%);
          }
          .img_{
            transform: scale(1.1);
          }
          .content_{
            i{
              transform: none;
              opacity: 1;
            }

            span{
              animation: ball1 0.4s ease infinite alternate;

              &:before{
                animation: ball2 0.4s ease infinite alternate;
                animation-delay: 0.2s;
              }

              &:after{
                animation: ball3 0.4s ease infinite alternate;
                animation-delay: 0.4s;
              }
            }
          }
        }
      }
    }

  }

  @keyframes ball1 {
    from {
      transform: translateY(0) translateX(0);
    }
    to{
      transform: translateY(50%) translateX(0);
    }
  }

  @keyframes ball2 {
    from {
      transform: translateY(0) translateX(150%);
    }
    to{
      transform: translateY(50%) translateX(150%);
    }
  }

  @keyframes ball3 {
    from {
      transform: translateY(0) translateX(300%);
    }
    to{
      transform: translateY(50%) translateX(300%);
    }
  }

</style>
