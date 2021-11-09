<template>
  <div>
    <el-button icon="el-icon-message-solid" @click="changePermission" />
  </div>
</template>

<script>
export default {
  methods: {
    changePermission(val) {
      this.$emit('change', val)
    }
  }
}
</script>

