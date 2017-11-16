import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import { api } from '@/configs';

import Home from '@/components/Home';
// import ListPlan from '@/components/ListPlan';
// import AddPlan from '@/components/AddPlan';
// import BasicReport from '@/components/BasicReport';
// import ListView from '@/components/ListView';

import Page403 from '@/components/Page403';
import Page404 from '@/components/Page404';

Vue.use(Router);

function resolveUserInfo() {
    const userInfo = store.state.user.info;

    // 没有用户信息，就去取，然后存到store里面
    return (userInfo && userInfo.username) ?
        Promise.resolve(userInfo) :
        api.getUserInfo().then(
            ({ body: info }) => {
                store.commit('SET_INFO', info);
                return info;
            }
        );
};

const router = new Router({
    routes: [{
            path: '/',
            name: '首页',
            component: Home,
            meta: { hasPermission: user => true },
        },
        {
            path: '/403',
            name: '403',
            component: Page403,
        },
        // {
        //     path: '/plan',
        //     name: '推广管理',
        //     component: ListPlan,
        //     meta: { hasPermission: user => true },
        // },
        // {
        //     path: '/plan/list',
        //     name: '列表页',
        //     component: ListView,
        //     meta: { hasPermission: user => true },
        // },
        // {
        //     path: '/plan/list',
        //     name: '列表页',
        //     component: ListView,
        //     meta: { hasPermission: () => true },
        // },
        {
            path: '*',
            name: '404',
            component: Page404,
        },
    ],
});

// 路由权限管理
router.beforeEach((to, from, next) => {
    if (to.name === '404' || to.name === '403') {
        next();
    }

    const { hasPermission = () => true } = to.meta;

    // 判断是否有权限
    const settlePermission = userInfo => {
        hasPermission(userInfo, to) ?
            next() :
            next('/403');
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
    router.push('/403');
});

export default router;