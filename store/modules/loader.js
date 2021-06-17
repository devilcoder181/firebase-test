export const state = () => ({
    activateLoader: false,
    successAlert: false,
  });
  export const mutations = {
    loadMe(state, value) {
       state.activateLoader = value
    },
    success(state, value) {
        state.successAlert = value
        setTimeout(()=> {
            state.successAlert = false
        },2000)
     },
  };
  export const getters = {
    activateLoader(state){
        return state.activateLoader
    },
    successAlert(state){
        return state.successAlert
    }
  };
