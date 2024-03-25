import router from '@/router'

router.addRoute({
  path: '/live',
  name: 'live',
  meta: { requiresAuth: false },
  component: () => import('./View.vue')
})
