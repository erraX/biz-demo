/**
 * @file main
 * @author niminjie
 */

import Vue from 'vue'
import VueResource from 'vue-resource'
import chain from './utils/decorators/selfChain'
import extendVue from './utils/extendVue'
import store from './store'
import router from './router'
import BizApp from './components/App'
import * as Veui from 'veui'
import * as filters from './filters'
import * as mixins from './mixins'
import * as directives from './directives'

/**
 * Application
 *
 * @class
 */
class App {
  constructor() {
    this.app = null
    this.extendVueI = extendVue(Vue)

    this.extend()
      .config()
      .start()
  }

  @chain
  extend() {

    // eg. `VeuiInput` => <veui-input></veui-input>
    this.extendVueI({
      pkg: Veui,
      type: 'component',
      registry: name => `Veui${name}`,
    })

    this.extendVueI({
      pkg: directives,
      type: 'directive',
    })

    this.extendVueI({
      pkg: filters,
      type: 'filter',
    })

    this.extendVueI({
      pkg: mixins,
      type: 'mixin'
    })

    Vue.use(VueResource)
  }

  @chain
  config() {
    Vue.config.productionTip = false;
  }

  @chain
  start() {
    this.app = new Vue({
      el: '#app',
      router,
      store,
      template: '<BizApp />',
      components: { BizApp },
    });
  }
}

export default new App()
