import { db } from "@/plugins/firebase"

export default {
  namespaced: true,
  state: {
    updateError: null,
    updateProgress: false
  },
  getters: {
    getUpdateError: state => state.updateError,
    getUpdateProgress: state => state.updateProgress,
  },
  actions: {
    async update({ state, dispatch }, payload) {
      state.updateProgress = true
      const collectionRef = db.collection(payload.collection)
      const docRef = collectionRef.doc(payload.id)
      try {
        await docRef.update({
          id: docRef.id,
          updatedAt: Date.now(),
          ...payload.item
        })
        state.updateError = null
        dispatch("snackAdmin/setSnack", {
          mode: "success",
          text: "Atualizado com sucesso."
        }, { root: true })
      } catch (e) {
        console.log(e.message)
        state.updateError = e.message
      } finally {
        state.updateProgress = false
        return state
      }
    },
    
  }
}