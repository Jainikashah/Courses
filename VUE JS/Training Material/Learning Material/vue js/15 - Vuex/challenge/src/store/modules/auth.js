export const auth = {
    namespaced : true,
   state(){
       return {
        isLoggedIn: false,
       }
   } ,
   mutations : {
    login(state) {
        state.isLoggedIn = true;
      },
      logout(state) {
        state.isLoggedIn = false;
      },
   },
   actions: {
    login(context){
        
        context.commit('login')
    },
    logout({commit}){
        commit('logout')
    },
   } ,
   getters: {
    isLoggedIn(state){
        return state.isLoggedIn
    }
   }
}