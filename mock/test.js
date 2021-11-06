const list = [
  {
    nick: 'Allen',
    phone: 19854454128,
    name: '彭蕾',
    subject: '数学',
    job: '数学老师',
    year: 22,
    updateTime: '2021-11-6'
  },
  {
    nick: 'Ane',
    phone: 19854454128,
    name: '彭磊',
    subject: '英语',
    job: '英语老师',
    year: 35,
    updateTime: '2021-11-6'
  },
  {
    nick: 'Tom',
    phone: 19854454128,
    name: '张雷',
    subject: '语文',
    job: '语文老师',
    year: 29,
    updateTime: '2020-11-6'
  },
  {
    nick: 'Tim',
    phone: 19854454128,
    name: '张凤华',
    subject: '体育',
    job: '体育老师',
    year: 30,
    updateTime: '2021-11-6'
  }
]
module.exports = [
  // user login
  {
    url: '/vue-element-admin/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
