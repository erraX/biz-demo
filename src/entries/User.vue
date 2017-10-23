<template>
    <div id="app">
        <biz-header
            :userInfo="userInfo"
            :naviItems="naviItems"
        />
        <div class="main">
            <router-view />
        </div>
        <biz-footer />
    </div>
</template>

<script>
    import NaviItems from '@/configs/NaviItems';
    import BizHeader from '@/components/BizHeader';
    import BizFooter from "@/components/BizFooter";

    import { getUserInfo } from '@/api';

    export default {
        name: 'app',

        components: {
            BizHeader,
            BizFooter,
        },

        data() {
            return {
                naviItems: NaviItems,
                userInfo: {},
            };
        },

        /**
         * 页面初始化的时候
         * 做一些请求？
         * 比如请求用户的权限
         */
        created() {
            getUserInfo().then(data => {
                this.userInfo = data;
            });
        },
    };
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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

    .main {
        margin-top: 10px;
        padding: 0 50px;
    }

    .global-loading {
        margin-top: 70px;
    }

    .global-message {
        top: 80px;
    }
</style>
