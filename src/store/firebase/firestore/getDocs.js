import { firestoreAction } from 'vuexfire'
import { db } from "@/plugins/firebase"

const bindItems = (collection, items = "items") => ({
  bindItems: firestoreAction(({ bindFirestoreRef, state }) => {
    if (!state.items.length) {
      return bindFirestoreRef(items, db.collection(collection))
    }
  })
})

const bindItemsWhere = (collection, where, itemsWhere = "itemsWhere") => ({
  bindItemsWhere: firestoreAction(({ bindFirestoreRef, state }) => {
    if (!state.itemsWhere.length) {
      return bindFirestoreRef(itemsWhere, db.collection(collection).where(where[0], "==", where[1]))
    }
  })
})
const bindItemsOrderBy = (collection, orderBy, itemsOrderBy = "itemsOrderBy") => ({
  bindItemsOrderBy: firestoreAction(({ bindFirestoreRef, state }) => {
    if (!state.itemsOrderBy.length) {
      return bindFirestoreRef(itemsOrderBy, db.collection(collection).orderBy(orderBy[0], orderBy[1]))
    }
  })
})

const bindItem = (collection, id, item = "item") => ({
  bindItem: firestoreAction(({ bindFirestoreRef, state }, payload) => {
    if (!Object.entries(state.item).length) {
      return bindFirestoreRef(item, db.collection(collection).doc(id))
    }
  })
})

export { bindItems, bindItem, bindItemsWhere, bindItemsOrderBy }