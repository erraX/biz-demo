import Home from '@/components/Home'

export default [
  {
    path: '/',
    name: '首页',
    component: Home,
    meta: {
      hasPermission: user => true
    },
  },
  {
    path: '/plan',
    name: '计划',
    component: Home,
    meta: {
      hasPermission: user => true
    },
  },
  {
    path: '/plan/list',
    name: '计划列表',
    component: Home,
    meta: {
      hasPermission: user => true
    },
  },
]