import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './scss/app.scss';
const app = createApp(App).mount('#app')
app.component('multiselect', Multiselect)

