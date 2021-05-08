import { auth, db } from "../../../plugins/firebase"

export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    getUser: state => state.user,
  },
  actions: {
    onAuthChange({ state, dispatch }) {
      auth
        .onAuthStateChanged(user => {
          state.user = user
          if (user) {
            dispatch("user/bindItem", {
              collection: "users",
              id: user.uid,
            }, { root: true });
          }
          if(!user) {
            dispatch("user/unbindItem", null, { root: true });
          }
        })
    }
  }
}