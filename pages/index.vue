<template>
    <div class="default_view" :class="{visible: visibleClass}">
        <r-banner></r-banner>
        <!-- <r-about></r-about>  -->
    </div>
</template>

<script>import {mapGetters} from 'vuex'
import rBanner from '@/components/frontend/home-banner'
import rAbout from '@/components/frontend/home-about'
//  import rAssistance from '@/components/frontend/home-assitance'
//  import rCourses from '@/components/frontend/home-courses'
//  import rTestimonials from '@/components/frontend/home-testimonials'
//  import rGallery from '@/components/frontend/home-gallery'
//  import rContact from '@/components/frontend/home-contact'

export default {
  data() {
    return {
      visibleClass: false,
    }
  },
  components: {
    rBanner,
    rAbout,
    //  rAssistance,
    //  rCourses,
    //  rTestimonials,
    //  rGallery,
    //  rContact,
  },
  computed: {
       ...mapGetters(['seoContent']),
  },
  head() {
    return {
      // title: this.seoContent.main.title,
      // meta: [
      //   { name: 'description', content: this.seoContent.main.metaDesc},
      //   { name: 'keywords', content: this.seoContent.main.keywords},
      //   { name: 'author', content: this.seoContent.main.author},
      //   { property: 'og:image', content:this.seoContent.main.ogImage },
      //   { property: 'og:description', content: this.seoContent.main.ogdesc}
      // ]

    }
  }
}
</script>

<style lang="scss" scoped>


</style>
