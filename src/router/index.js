import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import { getUserInfo } from '@/api';

import Home from '@/components/Home';
import ListPlan from '@/components/ListPlan';
import AddPlan from '@/components/AddPlan';
import BasicReport from '@/components/BasicReport';

import Page400 from '@/components/Page400';
import Page404 from '@/components/Page404';

Vue.use(Router);

const resolveUserInfo = () => {
    const userInfo = store.state.user.info;

    // 没有用户信息，就去取，然后存到store里面
    return (userInfo && userInfo.username)
        ? Promise.resolve(userInfo)
        : getUserInfo().then(
            data => {
                store.commit('SET_INFO', data);
                return data;
            }
        );
};

const router = new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: Home,
            meta: { hasPermission: user => true },
        },
        {
            path: '/400',
            name: '400',
            component: Page400,
            meta: { hasPermission: () => true },
        },
        {
            path: '/plan',
            name: '推广管理',
            component: ListPlan,
            meta: { hasPermission: user => false },
        },
        {
            path: '/report/basic',
            name: '基础报告',
            component: BasicReport,
            meta: { hasPermission: () => true },
        },
        {
            path: '*',
            name: '404',
            component: Page404,
            meta: { hasPermission: () => true },
        },
    ],
});

// 路由权限管理
router.beforeEach((to, from, next) => {
    const { hasPermission = () => true } = to.meta;

    // 判断是否有权限
    const settlePermission = userInfo => {
        hasPermission(userInfo, to)
            ? next()
            : next('/400');
    };

    // 判断权限有错误
    const settleError = err => next(err);

    resolveUserInfo()
        .then(settlePermission)
        .catch(settleError);
});

// 路由错误管理
router.onError(err => {
    console.error('Error', err);
    router.push('/400');
});

export default router;
