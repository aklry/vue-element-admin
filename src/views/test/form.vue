<template>
  <div class="form-wrapper">
    <s-validate #default="{ validate }" :rules="rules" :value="value">
      <div class="content">
        <span>活动名称：</span><el-input v-model="value" placeholder="请输入内容" @blur="validate" />
      </div>
      <div class="content">
        <span>活动区域：</span><el-input v-model="zone" placeholder="请输入工作区域" />
      </div>
      <div class="content">
        <span>活动时间：</span><el-input v-model="date" placeholder="请选择日期" suffix-icon="el-icon-date" />
      </div>
      <div class="content">
        <el-button type="primary">立即创建</el-button>
      </div>
    </s-validate>
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
      date: '',
      zone: '',
      rules: [
        {
          test: function(value) {
            return /^[\u4e00-\u9fa5]/.test(value)
          },
          message: '请输入中文'
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
