import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(store).use(MotionPlugin).mount('#app')