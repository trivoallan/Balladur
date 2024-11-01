import './assets/input.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomeView from './views/HomeView.vue'
import GetVideoList from './views/GetVideoList.vue'


const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/getvideo', name: 'about', component: GetVideoList }
  ],
})

createApp(App)
  .use(router)
  .mount('#app')