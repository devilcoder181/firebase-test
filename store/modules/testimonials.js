export const state = () => ({
    testiContent: [],
});
export const mutations = {
    gettingTesti(state, value) {
        state.testiContent = value
    },

};
// export const actions = {

//     // Getting Data
//     nuxtServerInit(vuexContext, value) {
//         const target =  this.$fire.firestore.collection('testiContent')
//         return target.get()
//         .then(res=> {
//             let testiArray = []

//             res.forEach((doc) => {
//               testiArray.push({...doc.data(), id:doc.id  })
//             });

//             vuexContext.commit("gettingTesti", testiArray);

//             //console.log(testiArray)


//         }).catch( (e)=> {
//             console.log(e)
//         })
//     },

//   };
  export const getters = {
    testiContent(state) {
      return state.testiContent;
    }
  };