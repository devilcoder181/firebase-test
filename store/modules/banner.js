import firebase from "firebase";
import {firestore} from "firestore"

  export const state = () => ({
    bannerContent: []
  });
  export const mutations = {
    fetchBanner(state, value){
      state.bannerContent = value
    }
  };
  export const actions = {

    nuxtServerInit({commit}, context) {
      const target2 =  firebase.firestore().collection('bannerContent').doc('bannerText')
      return target2.get()
      .then(res=> {
        commit("fetchBanner", res.data());
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

