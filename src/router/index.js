import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Layout from '@/layout'
/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 *
 * hidden: true                   路由是否显示，如果true则隐藏，默认false
 * alwaysShow: true               children.length===1时，true:显示根级目录，false:不显示
 *
 * redirect: noRedirect           如果设置noRedirect，则breadcrumb中点击无路由
 * name:'router-name'             路由名称，必须，用于 <keep-alive>
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               用于 sidebar and breadcrumb (recommend set)显示
    icon: 'svg-name'/'el-icon-x' 用于 sidebar显示
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
// 不检验权限路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
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
// 解决跳转当前路由跳当前路由问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch((err) => err)
}

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
