import {userData} from '../userData';

export const users = {
  namespaced : true,
    state(){
      return{
        userData : userData
      }
    },
    mutations:{
        ADD_USER(state, payload){
            state.userData.unshift(payload)
        },
        UPDATE_USER(state, payload){
          const userId = payload.id;
            state.userData.forEach(elm => {
            if(elm.id == userId){
              elm.username = payload.username;
              elm.email = payload.email;
              elm.userType = payload.userType
              elm.gender = payload.gender;
              elm.id = payload.username;
              elm.number = payload.number;
              elm.state = payload.state;
              elm.country = payload.country;
              elm.updatedAt = payload.updatedAt;
            }
          });
        },
    },
    actions :{
        addUser(context, payload){
            context.commit('ADD_USER',payload);
        },
        updateUser(context, payload){
          context.commit('UPDATE_USER',payload)
        },
       
    },
    getters:{
        userData(state){
            return state.userData
        }
    }
  }