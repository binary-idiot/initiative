import { createApp } from 'vue';
import gtag from 'vue-gtag-next';
import App from './App.vue';
import './registerServiceWorker';
import Functions from './utils/GlobalFunctions';
import router from './router';
import store from './store';

let enableGA = true;

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
	enableGA = false;
}

const app = createApp(App)
	.use(router)
	.use(store)
	.use(gtag, {
		property: {
			id: 'G-ZJ7V88XG65',
		},
		isEnabled: enableGA,
	});

app.config.globalProperties.$func = Functions;
app.mount('#app');
