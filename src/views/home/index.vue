<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">{{ pathRoute }}</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger" @click="handleDelete">危险按钮</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    pathRoute() {
      return this.$route.path
    }
  },
  methods: {
    handleDelete() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    }
  }
}
</script>
