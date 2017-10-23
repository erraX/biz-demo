<template>
    <div class="header">
        <div class="info">
            <img class="logo" src="../assets/logo.png" />
            <span class="title">{{ title }}</span>
        </div>
        <navi-menu :items="naviItems" class="biz-navi" />
        <div class="user-info">
            {{ userInfo.username }}
        </div>
    </div>
</template>

<script>
    import NaviMenu from '@/ui/NaviMenu';

    export default {
        name: 'BizHeader',

        components: { NaviMenu },

        props: ['userInfo', 'naviItems'],

        data() {
            return {
                title: '后台管理系统',
            };
        },
    };
</script>

<style lang="less" scoped>
@bgColor: #3463c1;

.header {
    background-color: @bgColor;
    color: #fff;
    position: relative;
}

.info {
    display: inline-block;
    padding-left: 10px;
    margin-right: 20px;
    vertical-align: middle;
    height: 70px;
    line-height: 70px;

    .logo {
        height: 70px;
    }

    .title {
        vertical-align: top;
        display: inline-block;
    }
}

.biz-navi {
    display: inline-block;
    width: 400px;
}

.user-info {
    position: absolute;
    right: 13px;
    text-align: right;
    top: 0;
    height: 70px;
    color: #fff;
    line-height: 70px;
}
</style>
