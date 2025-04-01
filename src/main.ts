import { createApp } from 'vue'
import './style.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import router from '@/router'
import App from './App.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
