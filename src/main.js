import { createApp } from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'
import router from './router'
// import {VueRouter} from 'vue-router'
// 5. 创建并挂载根实例
const app = createApp(App).use(router)
// 确保 _use_ 路由实例使
// 整个应用支持路由。
app.use(router)

app.use(VueHighlightJS)
app.mount('#app')
