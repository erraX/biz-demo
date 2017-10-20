// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import User from './entries/User';
import router from './router';

import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<User />',
    components: { User },
});
