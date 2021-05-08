import { firestoreAction } from 'vuexfire'
import { isEmpty } from 'lodash'
import { db } from '../../../plugins/firebase'

export default {
  namespaced: true,
  state: {
    item: {}
  },
  getters: {
    getItem: state => state.item,
    isItemEmpty: state => isEmpty(state.item)
  },
  actions: {
    bindItem: firestoreAction(({ bindFirestoreRef, state }, payload) => {
      if (isEmpty(state.item)) {
        return bindFirestoreRef("item", db.collection(payload.collection).doc(payload.id))
      }
    }),
    unbindItem: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef('item')
    }),
    
  }
}