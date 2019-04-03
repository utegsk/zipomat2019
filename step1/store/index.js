// import firebase from "@/plugins/firebase";
export const strict = false

export const state = () => ({
  user: {
    uid: 'xxx',
    photoURL: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    displayName: 'Janko Hraško'
  }
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