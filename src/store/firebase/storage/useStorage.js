import { storage } from "@/plugins/firebase"

export default {
  namespaced: true,
  state: {
    url: null,
    storageError: null,
    storageProgress: false,
    delError: null,
    delProgress: false
  },
  getters: {
    getUrl: state => state.url,
    getStorageError: state => state.storageError,
    getStorageProgress: state => state.storageProgress,
    getStorageDelProgress: state => state.delProgress,
    getStorageDelError: state => state.delError,
  },
  actions: {
    async upload({ state }, payload) {
      state.url = null
      state.storageProgress = true
      const storageRef = storage.ref(`${payload.path}`)
      try {
        const putRef = await storageRef.put(payload.file)
        state.url = await putRef.ref.getDownloadURL()
        state.storageProgress = false
      } catch (e) {
        console.log(e.message)
        state.url = null
        state.storageError = e.message
        state.storageProgress = false
      }
    },
    async del({ state }, payload) {
      state.delError = null
      state.delProgress = true
      const storageRef = storage.refFromURL(payload)
      try{
        state.delError = null
        await storageRef.delete()
      } catch(e) {
        console.log(e.message)
        state.delError = e.message
      } finally {
        state.delProgress = false
      }
      
    }
  }
}