import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import GetVideoList from './views/GetVideoList.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/getvideo', component: GetVideoList },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})