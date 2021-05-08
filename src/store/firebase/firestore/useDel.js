import { db } from "@/plugins/firebase"

export default {
  namespaced: true,
  state: {
    delError: null,
    delProgress: false
  },
  getters: {
    getDelError: state => state.delError,
    getDelProgress: state => state.delProgress,
  },
  actions: {
    async del({ state }, payload) {
      state.delProgress = true
      const collectionRef = db.collection(payload.collection)
      const docRef = collectionRef.doc(payload.id)
      try {
        state.delError = null
        await docRef.delete()
      } catch (e) {
        console.log(e.message)
        state.delError = e.message
      } finally {
        state.delProgress = false
      }
    },
  }
}