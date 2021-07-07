<template>
  <div class="home">
    {{ pathRoute }}
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  computed: {
    pathRoute() {
      return this.$route.path
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
