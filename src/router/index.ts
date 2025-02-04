import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HistoryView from '@/views/HistoryView.vue'
import CraftingView from '@/views/CraftingView.vue'
import CulturalProductsView from '@/views/CulturalProductsView.vue'
import EducationView from '@/views/EducationView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView,
    meta: {
      title: '历史文化'
    }
  },
  {
    path: '/crafting',
    name: 'crafting',
    component: CraftingView,
    meta: {
      title: '制作工艺'
    }
  },
  {
    path: '/classic-products',
    name: 'classicProducts',
    component: () => import('../views/ClassicProductsView.vue'),
    meta: {
      title: '经典产品'
    }
  },
  {
    path: '/cultural-products',
    name: 'cultural-products',
    component: CulturalProductsView,
    meta: {
      title: '文创产品'
    }
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView,
    meta: {
      title: '科普动画'
    }
  },
  {
    path: '/interactive-games',
    name: 'interactive-games',
    component: () => import('../views/InteractiveGamesView.vue'),
    meta: {
      title: '互动游戏'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: '联系我们'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100
      }
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - 凤翔泥塑`
  next()
})

export default router 