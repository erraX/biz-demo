/**
 * @file extendVue
 * @author niminjie
 */

import { each, indexOf, identity } from 'lodash'

export default Vue => ({
    pkg,
    type,
    registry = identity
  } = {}) => {
  if (!pkg || !type) {
    return
  }

  const needNameMethods = [
    'filter',
    'component',
    'directive'
  ]

  const needName = _.indexOf(needNameMethods, type) > -1

  _.forEach(pkg, (pkgFunc, name) => {
    var registryMethod = Vue[type]

    if (!registryMethod) {
      return
    }

    let args = [ pkgFunc ]

    // 有些注册方法是需要名字的，要两个参数
    if (needName) {
      args.unshift(registry(name, pkgFunc))
    }

    // component / filter / mixin / directive
    registryMethod.apply(Vue, args)
  })
}