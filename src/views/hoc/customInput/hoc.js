
const HocValidateComFunc = (Component) => ({
  name: `hoc-${Component.name}`,
  props: ['rules'],
  data() {
    return {
      value: '',
      errMsgs: ''
    }
  },
  methods: {
    validate(value) {
      this.value = value
      const validateStatus = this.rules.reduce((pre, cur) => {
        const check = cur && cur.test && cur.test(this.value)
        this.errMsgs = check ? '' : cur.message
        return pre && cur
      }, true)
      return validateStatus
    }
  },
  render() {
    return (
      <div>
        <Component initValue={this.value} on-blur={this.validate}></Component>
        <div>{this.errMsgs || ''}</div>
      </div>
    )
  }
})

export default HocValidateComFunc
