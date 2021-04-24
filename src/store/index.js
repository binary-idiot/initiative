import { createStore } from 'vuex';

export default createStore({
	state: {
		encounter: [
			{
				order: 5, name: 'Paul Ross', hp: 50, isCreature: false,
			},
			{
				order: 2, name: 'Raul Poss', hp: 100, isCreature: false,
			},
			{
				order: 8, name: 'QT Pie', hp: 70, isCreature: false,
			},
		],
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