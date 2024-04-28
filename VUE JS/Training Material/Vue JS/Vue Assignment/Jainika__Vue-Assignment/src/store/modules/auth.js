
export const auth = {
    namespaced : true,
    state(){
      return {
        isLoggedIn : false,
        // loggedInUser : null
        loggedInUser : {
          id: 'Jainika',
            username: "Jainika",
            password: "123456",
            userType: 'Admin',
            number: 1234432221,
            email: "j@g.com",
            state: "Gujarat",
            createdAt: 'Nov 18, 2021, 06:48 PM',
            updatedAt: 'Nov 19, 2021, 04:11 PM',
            country: "India",
            gender: "female",
            status:'Active'
        }
      }
    },
    mutations : {
      ADD_DETAILS(state, payload){
        state.loggedInUser = payload
      }
    },
    actions :{
      addloggedInUser(context, payload){
        context.commit('ADD_DETAILS',payload)
      }
    },
    getters :{
        getLoggedInUser(state){
            return state.loggedInUser
        },
        isLoggedIn(state){
            return state.isLoggedIn
        }
    }
  }
  