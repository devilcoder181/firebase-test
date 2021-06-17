export const state = () => ({
  seoContent: []
});
export const mutations = {
  setSeo(state, abtposts) {
    state.seoContent = abtposts;
  }
};
// export const actions = {
//   // Getting SEO Datas

//   // Updating SEO Content
//   // Loading Contact Contents
//   nuxtServerInit(vuexContext, context) {
//     const target = this.$fire.firestore.collection('seo')
//     return target.get()
//       .then(res => {
//         let seoArray = []

//         res.forEach((doc) => {

//           seoArray.push({
//             ...doc.data(),
//             id: doc.id
//           })
//         });

//         const convertArrayToObject = (array, key) => {
//           const initialValue = {};
//           return array.reduce((obj, item) => {
//             return {
//               ...obj,
//               [item[key]]: item,
//             };
//           }, initialValue);
//         };


//         vuexContext.commit("setSeo", convertArrayToObject(seoArray, 'id'));

//         //console.log(assistanceArray)


//       }).catch((e) => {
//         console.log(e)
//       })
//   },


// };

export const getters = {
  seoContent(state) {
    return state.seoContent;
  },
};
