<template>
  <div class="form-wrapper">
    <s-validate #default="{ validate }" :rules="rules" :value="value">
      <div class="content">
        <span>姓名：</span><el-input v-model="value" placeholder="请输入姓名" @blur="validate" />
      </div>
    </s-validate>
    <s-validate #default="{ validate }" :rules="phoneRules" :value="phone">
      <div class="content">
        <span>账户：</span><el-input v-model="phone" placeholder="请输入电话号码" @blur="validate" />
      </div>
    </s-validate>
    <s-validate #default="{ validate }" :rules="passwordRules" :value="password">
      <div class="content">
        <span>密码：</span><el-input v-model="password" type="password" placeholder="请输入密码" @blur="validate" />
      </div>
    </s-validate>
    <div class="content">
      <el-button type="primary">立即创建</el-button>
    </div>
  </div>
</template>

<script>
import SValidate from '@/views/renderless/svalidate.vue'
export default {
  components: {
    SValidate
  },
  data() {
    return {
      value: '',
      password: '',
      phone: '',
      rules: [
        {
          test: function(value) {
            return /^[\u4e00-\u9fa5]/.test(value)
          },
          message: '请输入中文'
        }
      ],
      passwordRules: [
        {
          test: function(value) {
            return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/.test(value)
          },
          message: '请输入正确密码格式(字母、数字、英文符号不包括空格)'
        }
      ],
      phoneRules: [
        {
          test: function(value) {
            return /^1[0-9]{10}$/.test(value)
          },
          message: '请输入正确的电话号码格式'
        }
      ]
    }
  }
}
</script>
<style>
.form-wrapper {
  width: 500px;
  margin: 100px auto;
}
.content {
    width: 300px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>
