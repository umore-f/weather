import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/reset.css'
import App from './App.vue'
import router from './router'

// element-puls图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// element-puls图标库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
