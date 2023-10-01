// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AllMedia from '@/views/AllMedia.vue'
import Dashboard from '@/views/Dashboard.vue'
import AccountSettings from '@/views/AccountSettings.vue'
const routes = [
  {
    path: '/all-media',
    component: AllMedia,
  },
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/account-settings',
    component: AccountSettings,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
