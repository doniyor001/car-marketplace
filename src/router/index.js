import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingUpView from '@/views/SingUpView.vue'
import SingInView from '@/views/SingInView.vue'
import CarsView from '@/views/CarsView.vue'
import { useAuthStore } from '../stores/auth'
import cardView from '@/views/cardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SingUpView,
      meta: {
        auth: false
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SingInView,
      meta: {
        auth: false
      }
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsView,
      meta: {
        auth: true
      }
    },
    {
      path: '/card',
      name: 'card',
      component: cardView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.auth && !authStore.userInfo.token) {
    next('/')
  } else if (!to.meta.auth && authStore.userInfo.token) {
    next('/cars')
  } else {
    next()
  }
})
export default router
