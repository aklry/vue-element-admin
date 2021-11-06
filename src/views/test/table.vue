<template>
  <div class="test-wrapper">
    <list-layout>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
        <al-table :column="formData.column" :data="formData.list" :pagination="true" />
      </template>
    </list-layout>
  </div>
</template>

<script>
import ListLayout from '@/components/ListLayout/index.vue'
import AlTable from '@/components/lb-table/lb-table.vue'
import Conditions from '@/components/ListLayout/conditions/index.vue'
import Mixins from '@/views/mixins/mixins'
export default {
  components: {
    ListLayout,
    AlTable,
    Conditions
  },
  mixins: [Mixins],
  data() {
    return {
      formData: {
        column: [
          {
            prop: 'nick',
            label: '昵称'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'name',
            label: '真实姓名'
          },
          {
            prop: 'subject',
            label: '所属学科'
          },
          {
            prop: 'job',
            label: '职位'
          },
          {
            prop: 'year',
            label: '工作年限'
          },
          {
            prop: 'updateTime',
            label: '录入时间'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<div>
                <el-button>操作</el-button>
              </div>)
            }
          }
        ],
        list: []
      }
    }
  },
  mounted() {
    this.getTestList().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items } = data
        this.formData.list = items
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
