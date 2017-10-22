import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import ListPlan from '@/components/ListPlan';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'hello',
            component: Home,
        },
        {
            path: '/user/listPlan',
            name: '推广管理',
            component: ListPlan,
        }
    ],
});
