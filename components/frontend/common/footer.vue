<template>
  <footer>
    <div class="r_container">
      <div class="footer_wrapper">
        <p>All rights reserved © RianAir 2020</p>

        <ul class="links_">
          <li><nuxt-link to="/terms">Terms & Conditions</nuxt-link></li>
          <li><nuxt-link to="/privacy">Privacy Policy</nuxt-link></li>
          <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import "assets/styles/frontend-components/variables";

  footer{
    position: relative;
    width: 100%;

    .footer_wrapper{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:1.25em 0;

      @media only screen and (max-width:767px){
        padding-bottom: 15vw;
      }

      p{
        margin: 0;
      }

      p, .links_ li a{
        font-size: 1vw;
         @media only screen and (min-width:768px) and (max-width:1024px){
          font-size: 1.5vw;
        }
        @media only screen and (max-width:767px){
          font-size: 3.5vw;
        }
      }

      .links_{
        position: relative;
        display: flex;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
        li{
          margin: 0 1em;

          a{
            color: $color-white;
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover, &:focus, &:active{
              color: $color-primary;
            }
          }
        }
      }

      @media only screen and (max-width:767px){
        flex-direction: column;
        justify-content: center;

        p{
          margin-bottom: 0.5em;
        }
      }
    }
  }
</style>
