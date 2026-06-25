import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/RecommendView.vue'),
    meta: { title: '申报书' }
  },
  {
    path: '/summary',
    name: 'summary',
    component: () => import('@/views/SummaryView.vue'),
    meta: { title: '总结报告' }
  },
  {
    path: '/effect',
    name: 'effect',
    component: () => import('@/views/EffectView.vue'),
    meta: { title: '培养成效' }
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: () => import('@/views/PromotionView.vue'),
    meta: { title: '推广应用' }
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('@/views/MediaView.vue'),
    meta: { title: '媒体报道' }
  },
  {
    path: '/international',
    name: 'international',
    component: () => import('@/views/InternationalView.vue'),
    meta: { title: '国际认可' }
  },
  {
    path: '/evidence',
    name: 'evidence',
    component: () => import('@/views/EvidenceView.vue'),
    meta: { title: '其他佐证' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '页面不存在' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title} - 红旅铸魂·数智赋能`
  }
})

export default router
