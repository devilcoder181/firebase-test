import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
import Vuelidate from 'vuelidate'
inViewportDirective.defaults.margin = '-25% 0%'
Vue.directive('in-viewport', inViewportDirective)
Vue.use(Vuelidate)
