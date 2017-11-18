import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Page403 from '@/components/Page403'
import Page404 from '@/components/Page404'
import {
  routes,
  api,
  noAuthorityLocation
} from '@/configs'

Vue.use(Router)

async function resolveUserInfo() {
  const userInfo = store.state.user.info

  if (userInfo && userInfo.username) {
      return userInfo
  }

  // 没有用户信息，就去取，然后存到store里面
  const { body: info } = await api.getUserInfo()
  store.commit('SET_INFO', info)
  return info
}

const router = new Router({
  routes: [
    ...routes,
    {
      path: noAuthorityLocation,
      name: '403',
      component: Page403,
    },
    {
      path: '*',
      name: '404',
      component: Page404,
    },
  ],
})

// 路由权限管理
router.beforeEach(async (to, from, next) => {
  if (to.name === '404' || to.name === '403') {
    next()
  }

  const {
    hasPermission = () => true
  } = to.meta

  // 判断是否有权限
  const settlePermission = userInfo => {
    hasPermission(userInfo, to)
      ? next()
      : next(noAuthorityLocation)
  }

  // 判断权限有错误
  const settleError = err => next(err)

  try {
    const userInfo = await resolveUserInfo()
    settlePermission(userInfo)
  }
  catch (ex) {
    settleError(ex)
  }
})

// 路由错误管理
router.onError(err => {
  console.error('Error', err)
  router.push(noAuthorityLocation)
})

export default router