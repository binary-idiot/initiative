import { createRouter, createWebHistory } from 'vue-router';
import { trackRouter } from 'vue-gtag-next';
import TrackerView from '../views/Tracker.vue';
import SettingsView from '../views/Settings.vue';
import CreatureView from '../views/Creatures.vue';

const routes = [
	{
		path: '/',
		name: 'Tracker',
		component: TrackerView,
	},

	{
		path: '/settings/',
		name: 'Settings',
		component: SettingsView,
	},

	{
		path: '/creatures/',
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

trackRouter(router);

export default router;
