import firebase from "@/plugins/firebase";
export const strict = false

export const state = () => ({
  user: {}
})

export const getters = {
  getUser: state => state.user
}

export const mutations = {
  setUser(state, user) {    
    state.user = user    
  }
}

export const actions = {
  saveUser({ commit }, value) {    
    commit('setUser', value)    
  }  
}