import router from '@/router'

router.addRoute({
  path: '/live',
  name: 'live',
  meta: { requiresAuth: false },
  component:async () => import('./View.vue')
})
