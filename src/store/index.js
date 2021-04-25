import { createStore } from 'vuex';

export default createStore({
	state: {
		encounter: [],
	},
	mutations: {
		addEntity(state, entity) {
			state.encounter.push(entity);
		},
		removeEntity(state, index) {
			state.encounter.splice(index, 1);
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
	},
});
