import { createPinia, setActivePinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const pinia = createPinia()
pinia.use(() => ({ plugin_value: 'helloworld this is plugin value'}))



const app = createApp(App)
app.use(pinia)
app.mount('#app')
