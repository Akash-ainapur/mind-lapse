import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/Game.vue'
import NewsDetail from './views/NewsDetail.vue'
import NewsFeed from './views/NewsFeed.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
  { path: '/feed', component: NewsFeed },
  { path: '/news/:slug', component: NewsDetail },
  { path: '/hype', component: { template: '<div style="padding:4rem"><h1>HYPE INDEX</h1><p>Coming Soon...</p><router-link to="/" class="nav-link">BACK</router-link></div>' } },
  { path: '/chat', component: { template: '<div style="padding:4rem"><h1>SIGNAL CHAT</h1><p>Coming Soon...</p><router-link to="/" class="nav-link">BACK</router-link></div>' } },
  { path: '/archive', component: { template: '<div style="padding:4rem"><h1>ARCHIVE</h1><p>Coming Soon...</p><router-link to="/" class="nav-link">BACK</router-link></div>' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
