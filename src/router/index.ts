import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    redirect: '/dashboard',
    components: {
      default: () => import('@/components/layout/layout.vue'),
    },
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
      },
      {
        name: 'examine',
        path: '/examine',
        component: () => import('@/pages/examine/index.vue'),
      },
      {
        name: 'tutoring',
        path: '/tutoring',
        component: () => import('@/pages/tutoring/index.vue'),
      },
      {
        name: 'profile',
        path: '/profile',
        redirect: '/profile/training',
        children: [
          {
            name: 'training',
            path: 'training',
            component: () => import('@/pages/profile/training.vue'),
          },
          {
            name: 'examination',
            path: 'examination',
            component: () => import('@/pages/profile/examination.vue'),
          },
          {
            name: 'qa',
            path: 'qa',
            component: () => import('@/pages/profile/qa.vue'),
          },
          {
            name: 'info',
            path: 'info',
            component: () => import('@/pages/profile/info.vue'),
          },
          {
            name: 'change-password',
            path: 'change-password',
            component: () => import('@/pages/profile/change-password.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const { token } = userStore.state
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
