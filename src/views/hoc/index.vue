
<template>
  <div>
    <HocCustomCom :value="value" :rules="rules" />
  </div>
</template>

<script>
import HocFunc from './customInput/hoc'
import CustomInput from './customInput/index'
const HocCustomCom = HocFunc(CustomInput)
export default {
  components: {
    HocCustomCom
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
