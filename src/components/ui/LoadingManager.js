import Vue from 'vue'
import Loading from './Loading'

const ViLoading = Vue.extend(Loading)

class LoadingManager {
  constructor() {
    this.loading = new ViLoading()
    this.el = this.createContainer()
    this.loading.$mount(this.el)
  }

  createContainer() {
    let el = document.createElement('div')
    document.body.appendChild(el)
    return el
  }

  show() {
    this.loading.show()
  }

  hide() {
    this.loading.hide()
  }
}

var manager = new LoadingManager()
export default manager