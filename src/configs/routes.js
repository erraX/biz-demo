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
]