import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import ListPlan from '@/components/ListPlan';
import AddPlan from '@/components/AddPlan';
import BasicReport from '@/components/BasicReport';

import store from '../store';

import { getUserInfo } from '@/api';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: Home,
            meta: { role: [ 'user' ] },
        },
        {
            path: '/plan',
            name: '推广管理',
            component: ListPlan,
            meta: { role: [ 'admin' ] },
        },
        {
            path: '/report/basic',
            name: '基础报告',
            component: BasicReport,
            meta: { role: [ 'user' ] },
        },
    ],
});

// 路由权限管理
router.beforeEach((to, from, next) => {
    console.log(store);
    getUserInfo()
        .then(data => {
            debugger
            console.log('Fetch user info', data);
            next();
        });
});

export default router
