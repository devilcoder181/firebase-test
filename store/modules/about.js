
  export const state = () => ({
    aboutText: [],
  });
  export const mutations = {

    setAboutPost(state, abtposts) {
      state.aboutText = abtposts;
    },

  };
  // export const actions = {

  //   // Loading Contact Contents
  //   nuxtServerInit(vuexContext, context) {
  //     const target =  this.$fire.firestore.collection('aboutUsContent').doc('ADXIW68qMuRbZjfDjAJt')
  //     return target.get()
  //     .then(res=> {
  //       vuexContext.commit("setAboutPost", res.data());
  //     }).catch( (e)=> {
  //       console.log(e)
  //     })

  //   },


  // };
  export const getters = {
    aboutText(state) {
      return state.aboutText;
    },
  };

