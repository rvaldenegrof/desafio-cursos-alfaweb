import Firebase from 'firebase'

export const session = {
  namespaced: true,
  state: {
    user: null,
    additionalUserInfo: null
  },
  getters: {},
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser
    },
    SET_ADDITIONAL_USER_INFO(state, newData) {
      state.additionalUserInfo = newData
    },
    UNSET_USER(state){
      state.user = null
      state.additionalUserInfo = null
    },
/*     UNSET_ADDITIONAL_INFO(state){
      state.additionalUserInfo = null
    } */
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        Firebase.auth()
          .signInWithEmailAndPassword(credentials.email, credentials.password)
          .then((data) => {
            console.log(data)
            context.commit('SET_USER', data.user)
            context.commit('SET_ADDITIONAL_USER_INFO', data.additionalUserInfo)
            resolve()
          }, reject)
      })
    },
    logout(context){
      return new Promise((resolve, reject) => {
        Firebase.auth()
        .signOut()
        .then((data) => {
          console.log(data)
          context.commit('UNSET_USER', data.user)
          //context.commit('UNSET_ADDITIONAL_INFO', data.additionalUserInfo)
          resolve()
          //console.log('Logout correcto', accept)
          //this.$router.push('login')
        }, reject())
      })
    },
    createUser(context, credentials) {
      return new Promise((resolve, reject) => {
        Firebase.auth()
          .createUserWithEmailAndPassword(credentials.email, credentials.password)
          .then((data) => {
            context.commit('SET_USER', data.user)
            context.commit('SET_ADDITIONAL_USER_INFO', data.additionalUserInfo)
            resolve()
          }, reject)
      })
    }
  }
}
