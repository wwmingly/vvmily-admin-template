import { constantRoutes } from '@/router'
const state = {
  routes: constantRoutes || [],
  addRoutes: []
}

const mutations = {}

const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
