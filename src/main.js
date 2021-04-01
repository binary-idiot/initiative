import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import Functions from './utils/GlobalFunctions';
import router from './router';

const app = createApp(App).use(router);
app.config.globalProperties.$func = Functions;
app.mount('#app');
