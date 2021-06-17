<template>
  <div class="testi_item" @click="showModal">
      <div class="content_">
        <p>{{desc}}</p>
        <strong> - {{name}}</strong>
      </div>

      <div class="img_">
        <img :src="img" :alt="name">
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="512.449" height="126.111" viewBox="0 0 512.449 126.111">
        <path id="Path_9800" data-name="Path 9800" d="M170.667,4634s37.333-38,126.667-25.333S433.333,4654,524.667,4644,682,4589.333,682,4589.333v120L214,4714Z" transform="translate(-170.051 -4588.392)"  />
      </svg>

    </div>
</template>

<script>
export default {
  props: {
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
     id: {
      type: Number,
      required: true
    },
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

.testi_item{
    position: relative;
   // width: 100%;
    padding: 3em 2.5em;
    border-radius: 1.5em;
    background: $color-white;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 15px;
    transition: all 0.3s ease;
    overflow: hidden;
    cursor: pointer;

    svg{
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scale(1.1);
      transform-origin: center;
      z-index: 1;

     path{
        stroke: none;
        fill: $color-primary;
        opacity: 0.1;
     }
    }


    .content_{
      position: relative;
      z-index: 2;
      p{
        font-weight: 500;
      }
      p,strong{
        font-size: 0.75vw;
        margin: 0;
        color: $color-black;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;

        @media only screen and (max-width:1024px){
          font-size: 14px;
        }
      }

      strong{
        font-style: italic;
        margin-top: 1em;
        display: block;
      }
    }

    .img_{
      position: relative;
      width: 4vw;
      height: 4vw;
      border-radius: 50%;
      overflow: hidden;
      border:2px solid $color-secondary;

      img{
        width: 100%;
        height: 100%;
      }

      @media only screen and (max-width:1024px){
        width: 50px;
        height: 50px;
      }

    }
  }

  .swiper-slide-active{
    .testi_item{
      background-color: $color-black;

      svg{
        path{
          opacity: 0.2;
        }
      }

      .content_{
        p, strong{
          color: $color-white;
        }
      }
    }
  }

</style>
