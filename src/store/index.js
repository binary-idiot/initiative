import { createStore } from 'vuex';

export default createStore({
	state: {
		encounter: [],
		activeModal: '',
	},
	getters: {
		isActiveModal: (state) => (modal) => modal === state.activeModal,
	},
	mutations: {
		addEntity(state, entity) {
			state.encounter.push(entity);
		},
		removeEntity(state, index) {
			state.encounter.splice(index, 1);
		},
		changeModal(state, modal) {
			state.activeModal = modal;
		},
	},
	actions: {
		saveEntity({ commit }, e) {
			const entity = {
				order: e.order,
				name: e.name,
				hp: e.hp,
				isCreature: e.isCreature,
			};

			commit('addEntity', entity);
		},
		deleteEntity({ commit }, index) {
			commit('removeEntity', index);
		},
		openModal({ commit }, modal) {
			commit('changeModal', modal);
		},
		closeModal({ commit }) {
			commit('changeModal', '');
		},
	},
});
