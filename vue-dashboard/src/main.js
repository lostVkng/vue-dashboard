import { createApp} from 'vue';

import App from './App.vue';
import router from './router';

// import bootstrap files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Vue-Dash - specific CSS
import './assets/main.css';


const app = createApp(App);

app.use(router);

app.mount('#app');

document.title = 'Dashboard';