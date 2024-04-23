import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 饿了么组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(ElementPlus).use(router).mount('#app')
