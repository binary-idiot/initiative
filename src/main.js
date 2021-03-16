import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import Functions from './utils/GlobalFunctions';

const app = createApp(App);
app.config.globalProperties.$func = Functions;
app.mount('#app');
