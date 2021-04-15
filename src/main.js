import { createApp } from 'vue';
import gtag from 'vue-gtag-next';
import App from './App.vue';
import './registerServiceWorker';
import Functions from './utils/GlobalFunctions';
import router from './router';

const app = createApp(App)
	.use(router)
	.use(gtag, {
		property: {
			id: 'G-ZJ7V88XG65',
		},
	});

app.config.globalProperties.$func = Functions;
app.mount('#app');
