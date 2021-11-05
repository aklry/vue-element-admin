<template>
  <div>
    <el-button @click="onClick">click add memory</el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions('test', ['addMemoryList']),
    onClick() {
      const list = new Array(20 * 1024 * 1024)
      this.addMemoryList(list)
    }
  }
}
</script>

<style>
</style>
