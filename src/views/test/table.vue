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
import Data from '@/views/mixins/data'
export default {
  components: {
    ListLayout,
    AlTable,
    Conditions
  },
  mixins: [Mixins, Data],
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
