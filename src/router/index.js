import { createRouter, createWebHistory } from 'vue-router';
import CreatureView from '../views/Creatures.vue';

const routes = [
	{
		path: '/',
		name: 'Creatures',
		component: CreatureView,
	},

	{
		path: '/creatures/:creature',
		name: 'Creature',
		component: CreatureView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
