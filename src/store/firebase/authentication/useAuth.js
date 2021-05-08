import { auth } from "../../../plugins/firebase"

export default {
  namespaced: true,
  state: {
    loginError: null,
    logoutError: null,
    loginProgress: false
  },
  getters: {
    getLogoutError: state => state.logoutError,
    getLoginError: state => state.loginError,
    getLoginProgress: state => state.loginProgress
  },
  actions: {
    async signIn({ state }, payload) {
      state.loginProgress = true
      try {
        await auth.signInWithEmailAndPassword(payload.email, payload.password)
        state.loginError = null
      } catch (e) {
        state.loginError = e.message
        console.log(e.message)
      } finally {
        state.loginProgress = false
        return state
      }
    },
    async signUp({ state }, payload) {
      state.loginProgress = true
      try {
        await auth.createUserWithEmailAndPassword(payload.email, payload.password)
        state.loginError = null
      } catch (e) {
        state.loginError = e.message
        console.log(e.message)
      } finally {
        state.loginProgress = false
        return state
      }
    },
    async logout({ state }) {
      state.loginProgress = true
      try {
        await auth.signOut()
        state.logoutError = null
      } catch (e) {
        state.logoutError = e.message
        console.log(e.message)
      } finally {
        state.loginProgress = false
        return state
      }
    }
  }
}