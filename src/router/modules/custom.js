import Layout from '@/layout'
const customRouter = {

  path: '/test',
  component: Layout,
  redirect: '/test/index',
  alwaysShow: true, // will always show the root menu
  name: 'Test',
  meta: {
    title: 'Test',
    icon: 'lock',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [{
    path: 'index',
    component: () => import('@/views/test/form'),
    name: 'Index',
    meta: {
      title: 'Form',
      icon: 'icon',
      noCache: true,
      roles: ['admin']
    }
  }, {
    path: 'table',
    component: () => import('@/views/test/table'),
    name: 'Table',
    meta: {
      title: 'Table',
      icon: 'icon',
      noCache: true,
      roles: ['editor']
    }
  }, {
    path: 'directive',
    component: () => import('@/views/test/directive'),
    name: 'Directive',
    meta: {
      title: 'Directive Page',
      icon: 'icon',
      noCache: true,
      roles: ['editor', 'admin']
    }
  }]
}
export default customRouter
