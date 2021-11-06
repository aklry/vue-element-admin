import request from '@/utils/request'
export default {
  methods: {
    getTestList(params) {
      return request({
        url: '/vue-element-admin/test/list',
        method: 'get',
        params
      })
    }
  }
}
