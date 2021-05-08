import { db } from "@/plugins/firebase"

export default {
  namespaced: true,
  state: {
    addError: null,
    addProgress: false
  },
  getters: {
    getAddError: state => state.addError,
    getAddProgress: state => state.addProgress,
  },
  actions: {
    async add({ state, dispatch }, payload) {
      state.addProgress = true
      const collectionRef = db.collection(payload.collection)
      const docRef = collectionRef.doc()
      try {
        state.addError = null
        await docRef.set({
          id: docRef.id,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          ...payload.item
        })
        dispatch("snackAdmin/setSnack", {
          mode: "success",
          text: "Adicionado com sucesso."
        }, { root: true })
      } catch (e) {
        console.log(e.message)
        state.addError = e.message
      } finally {
        state.addProgress = false
      }
    },
  }
}