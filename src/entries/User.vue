<template>
    <div id="app">
        <biz-header 
            :userInfo="userInfo"
            :naviItems="naviItems" 
        />
        <router-view />
        <biz-footer />
    </div>
</template>

<script>
    import Navigations from '@/configs/Navigations';
    import BizHeader from '@/components/BizHeader';
    import BizFooter from "@/components/BizFooter";

    import {getUserInfo} from '@/api';

    export default {
        name: 'app',

        components: {
            BizHeader,
            BizFooter,
        },

        data() {
            return {
                naviItems: Navigations,

                userInfo: {
                    username: 'niminjie',
                },
            };
        },

        /**
         * 页面初始化的时候
         * 做一些请求？
         * 比如请求用户的权限
         */
        created() {
            this.$http.post('/user/get')
                .then(data => {
                    console.log(data);
                });
        },
    };
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        margin: 0;
    }

    a {
        color: #fff;
        cursor: auto;
        text-decoration: none;
    }
</style>
