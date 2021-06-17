<template>
  <div class="dng-modal">

    <button class="btn_close" @click="closeModal()"></button>


    <div class="modal_overlay" @click="closeModal()"></div>

    <div class="dng-modal-base">
        <div class="assistance_content">
          <div class="right_">
            <h2 class="title_"><span>Apply Now</span></h2>

            <form id="equiry_form" @submit.prevent="submit">

              <div class="form_controller">

                  <div class="form_box full_" v-if="showError">
                    <div class="alert_ danger_" >
                      <p>{{submitStatus}}</p>
                    </div>
                  </div>

                <div class="form_box full_">
                  <input type="text" placeholder="Full Name" v-model.trim="$v.applyForm.name.$model">
                </div>

                <div class="form_box full_">
                  <input type="email" placeholder="Email" v-model.trim="$v.applyForm.email.$model">
                </div>


                <div class="form_box full_">
                  <input type="number" placeholder="Phone Number" v-model.trim="$v.applyForm.phone.$model">
                </div>


                <div class="form_box full_">
                  <multiselect
                    :options="courses"
                    v-model="applyForm.courses"
                    :searchable="false"
                  ></multiselect>
                </div>


                <div class="form_box full_">
                  <textarea placeholder="Message" rows="7" v-model.trim="$v.applyForm.messages.$model"></textarea>
                </div>

                <div class="form_box full_">
                  <button class="r_btn_primary" :disabled="submitStatus === 'PENDING'">
                    <span>Submit</span>
                  </button>
                </div>

              </div>

            </form>

          </div>
        </div>
    </div>

    <!-- <transition name="modal">
      <successModal  v-if="showModal" >
        <h3>Request Submitted</h3>
      </successModal>
    </transition> -->

  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { required, minLength, between } from 'vuelidate/lib/validators'
//import successModal from '@/components/admin/success-modal'
//import axios from 'axios'

export default {
  components: {
    Multiselect 
    //successModal,
  },
  data() {
    return {
      courses: [
          'Commercial Pilot License',
          'Privot Pilot License',
          'Multi-Engine Rating',
          'Type Rating',
          'Cabin Crew',
          'Aircraft Maintenance Engineer'
          ],

      applyForm: {
        name:'',
        email: '',
        phone: '',
        courses: 'Commercial Pilot License',
        messages: '',
        isVisited: false,
        isVisited: false,
        updatedDate: new Date().toUTCString()
      },

      submitStatus: null,
      showError: false,
      showModal: false,
    }
  },
  validations: {
    applyForm:{
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        minLength: minLength(4)
      },
      phone: {
        required,
        minLength: minLength(4)
      },
      messages: {
        required,
        minLength: minLength(4)
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    async submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'Please fill all the fields'
        this.showError = true
      } else {
        try{
          this.$store.commit('loadMe', true)
          this.$store.dispatch('addEnquiry', this.applyForm)
        }catch(e) {
          console.log(e)
        }finally {
          setTimeout(()=> {
            this.$store.commit('loadMe', false)
            this.$store.commit('success', true)
            this.$emit('closeModal')
          },2000)
        }
        }
      }
  } 
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
      max-width:30%;
      min-width:30%;
      display: block;

      @media only screen and (min-width:768px) and (max-width:1024px){
        max-width:50%;
        min-width:50%;
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

      .right_{
        position: relative;
        display: block;
        padding: 2em;
        background-color: $color-dark;

        h3{
          margin-top: 0;
          font-size: 1.75vw;
          margin-bottom: 0.25em;

           @media only screen and (max-width:1024px){
            font-size: 24px;
          }
        }

        p{
          margin-top: 0;
          font-size: 1.1vw;
          line-height: 2;

           @media only screen and (max-width:1024px){
            font-size: 16px;
          }
        }
      }

      .title_{
        position: relative;
        display: block;
        margin-bottom: 1em;
        font-size: 2vw;
        color: $color-primary;
        @media only screen and (max-width:1024px){
          font-size: 24px;
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
    transition: all 0.3s ease;
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

<style lang="scss">
  .form_box .v-text-field--outlined > .v-input__control > .v-input__slot {
    background: #161616;
  }

  .form_box .v-text-field--outlined.v-input--is-focused fieldset, .form_box .v-text-field--outlined.v-input--has-state fieldset {
      border: none;
  }

  .form_box .theme--light.v-icon {
      color: #404040;
  }

  .form_box .theme--light.v-select .v-select__selection--comma {
    color: #fff;
    font-weight: 500;
  }
  .form_box .theme--light.v-input input, .form_box .theme--light.v-input textarea{
    border: none;
  }
  .form_box .v-text-field.v-text-field--enclosed .v-text-field__details{
    display: none;
  }
  .form_box .v-select--is-menu-active{
    .v-menu{
      display: block;
    }
  }
</style>
