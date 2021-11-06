<template>
  <div>
    <div class="conditions-wrapper">
      <div class="conditions-wrapper__item"><el-input placeholder="请输入搜索内容" /></div>
      <div class="conditions-wrapper__item"><el-button>搜索</el-button></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .conditions-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    &__item {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
  }
</style>
