import {createApp} from 'vue';

import App from './App.vue';
import router from './router';

// Vue-Dashboard - main CSS
import './assets/main.css';


const app = createApp(App);

app.use(router);

app.mount('#app');

document.title = 'Dashboard';