import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

Vue.use(Router);

const ListPlan = () => import('@/components/ListPlan');
const AddPlan = () => import('@/components/AddPlan');

export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: Home,
        },
        {
            path: '/user/listPlan',
            name: '推广管理',
            component: ListPlan,
        },
        {
            path: '/user/addPlan',
            name: '新建推广计划',
            component: AddPlan,
        },
    ],
});
