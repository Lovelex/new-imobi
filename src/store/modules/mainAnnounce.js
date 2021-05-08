export default {
  namespaced: true,
  state: {
    announceWindow: 0,
    item: {
      address: "",
      zip: "",
      state: "",
      city: "",
      district: "",
      road: "",
      number: "",
      addressComponents: [],
      lat: 0,
      lng: 0
    },
  },
  getters: {
    getItem: state => state.item,
    getAnnounceWindow: state => state.announceWindow,
  },
  mutations: {
    nextWindow: (state) => state.announceWindow++,
    prevWindow: (state) => state.announceWindow--,
    initialWindow: (state) => state.announceWindow = 0
  }

}