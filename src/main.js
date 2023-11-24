import { createApp } from 'vue'
import App from './App.vue'
import './input.css'
import router from './route';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createPinia} from 'pinia';
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)

app.use(router).mount('#app')



