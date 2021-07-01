import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Layout from '@/layout'

// 不检验权限路由
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: '首页', icon: 'el-icon-menu', affix: true }
      }
    ]
  },
  {
    path: '/path',
    component: Layout,
    meta: { title: '系统管理', icon: 'el-icon-menu' },
    redirect: '/path/path',
    children: [
      {
        path: 'path',
        component: () => import('@/views/home/index'),
        name: 'path',
        meta: { title: 'path', icon: 'el-icon-menu' }
      },
      {
        path: 'role',
        component: () => import('@/views/home/index'),
        name: 'role',
        meta: { title: 'role', icon: 'el-icon-menu' }
      }
    ]
  }
]
// 需要权限校验的路由配置
export const asyncRoutes = []

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
