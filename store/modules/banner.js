
  export const state = () => ({
    bannerContent: []
  });
  export const mutations = {
    fetchBanner(state, value){
      state.bannerContent = value
    }
  };
  export const actions = {

    // nuxtServerInit({commit}, context) {
    //   const target2 =  this.$fire.firestore.collection('bannerContent').doc('bannerText')
    //   return target2.get()
    //   .then(res=> {
    //     commit("fetchBanner", res.data());
    //   }).catch( (e)=> {
    //     console.log(e)
    //   })
    // }, 

    fetchUser({ commit }) {
      return new Promise((resolve, reject) => {
        const target2 =  this.$fire.firestore.collection('bannerContent').doc('bannerText')
        return target2.get()
        .then(res=> {
          commit("fetchBanner", res.data());
        }).catch( (e)=> {
          console.log(e)
        })
      });
    }

  };
  export const getters = {
    bannerContent(state) {
      return state.bannerContent;
    },
  };

