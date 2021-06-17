
  export const state = () => ({
    bannerContent: []
  });
  export const mutations = {
    fetchBanner(state, value){
      state.bannerContent = value
    }
  };
  export const actions = {

    // Loading Contact Contents
    async asyncData(vuexContext, context) {
      const target2 =  await this.$fire.firestore.collection('bannerContent').doc('bannerText')
      return target2.get()
      .then(res=> {
        vuexContext.commit("fetchBanner", res.data());
      }).catch( (e)=> {
        console.log(e)
      })
      
    },

  };
  export const getters = {
    bannerContent(state) {
      return state.bannerContent;
    },
  };

