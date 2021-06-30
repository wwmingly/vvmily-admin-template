<template>
  <div :class="classObj" class="app-wrapper">
    <div class="drawer-bg" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>
<script>
import { AppMain, Navbar, Sidebar } from './components'
export default {
  name: '',
  components: {
    AppMain,
    Navbar,
    Sidebar
  },
  data() {
    return {}
  },
  computed: {
    classObj() {
      return {}
    }
  }
}
</script>
