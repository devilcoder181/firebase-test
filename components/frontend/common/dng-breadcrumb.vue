<template>
  <div class="breadcrumb_">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .breadcrumb_{
    position: relative;
    display: block;
    width: 100%;
    margin: 1.5em 0;

    ul{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      list-style: none;
      padding: 0;
      li{
        position: relative;
        font-size: 1vw;
        padding:0 1em;
        @media only screen and (max-width:1024px){
          font-size: 14px;
        }

        &:before{
          content: '/';
          position: absolute;
          right: 0;
        }


        a{
          color: #fff;
          transition: all 0.3s ease;
           font-size: 1vw;
           opacity: 0.5;
           text-decoration: none;
          @media only screen and (max-width:1024px){
            font-size: 14px;
          }

          &:hover{
            color: #0A8AE9;
            opacity: 1;
          }
        }
        &:last-child{
          font-weight: 500;
          &::before{
            display: none;
          }
        }

        &:first-child{
          padding-left: 0;

        }
      }
    }
  }
</style>
