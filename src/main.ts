import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import router from '@/router'
import App from './App.vue'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
