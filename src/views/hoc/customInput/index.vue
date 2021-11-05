
<template>
  <div>
    <el-input v-model="value" @blur="onBlur" />
  </div>
</template>

<script>
export default {
  props: {
    initValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: this.initValue
    }
  },
  mrthods: {
    onBlur() {
      this.$emit('blur', this.value)
    }
  }
}
</script>

<style>
</style>

