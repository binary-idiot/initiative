import { createStore } from 'vuex';

export default createStore({
	state: {
		entities: [
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
		pushEntity(state, entity) {
			state.entity.push(entity);
		},
	},
	actions: {
		addEntity({ commit }, e) {
			const entity = {
				order: e.order,
				name: e.name,
				hp: e.hp,
				isCreature: e.isCreature,
			};

			commit('pushEntity', entity);
		},
	},
});
