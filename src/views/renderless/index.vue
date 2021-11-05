<template>
  <div>
    <s-validate #default="{ validate }" :rules="rules" :value="value">
      <el-input v-model="value" @blur="validate" />
    </s-validate>
  </div>
</template>

<script>
import SValidate from './svalidate.vue'
export default {
  component: {
    SValidate
  },
  data() {
    return {
      value: '',
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value)
          },
          message: '请输入一个数字'
        }
      ]
    }
  }
}
</script>

<style>
</style>
