<template>
    <div id="app">
        <img src="../assets/logo.png">
        <biz-header />
        <router-view/>
        <biz-footer />
    </div>
</template>

<script>
    import BizHeader from '@/components/BizHeader';
    import BizFooter from "@/components/BizFooter";

    export default {
        name: 'app',

        components: {
            BizFooter,
            BizHeader,
        },

        /**
         * 页面初始化的时候
         * 做一些请求？
         * 比如请求用户的权限
         */
        created() {

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
        margin-top: 60px;
    }
</style>
