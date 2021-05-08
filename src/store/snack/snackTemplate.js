export default {
  namespaced: true,
	state: {
		snack: {
			isActive: false,
			mode: 'success',
			text: '',
		}
	},
	getters: {
		getSnack: state => state.snack
	},
	mutations: {
		setSnack: (state, payload) => state.snack = {
			isActive: true,
			...payload
		}
	},
	actions: {
		setSnack({ commit }, payload) {
			commit('setSnack', payload)
		}
	}
}