<template>
  <div>
    <slot :validate="validate" />
    {{ errMsg }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['rules', 'value'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate() {
      const validateSattus = this.rules.reduce((pre, cur) => {
        const check = cur && cur.test && cur.test(this.value)
        this.errMsg = check ? '' : cur.message
        return pre && check
      }, true)
      return validateSattus
    }
  }
}
</script>

<style>
</style>
