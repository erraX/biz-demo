<template>
    <div class="header">
        <div class="navi-container">
            <el-menu
                theme="dark"
                mode="horizontal"
            >
                <router-link
                    v-for="(item, idx) in naviItems"
                    :key="idx"
                    :to="item.link"
                >
                    <el-submenu
                        v-if="item.childLinks && item.childLinks.length"
                        :index="String(idx)"
                    >
                        <template slot="title">{{ item.label }}</template>
                        <router-link
                            v-for="(subItem, idx2) in item.childLinks"
                            :key="idx + '-' + idx2"
                            :to="subItem.link"
                        >
                            <el-menu-item :index="idx + '-' + idx2">
                                {{ subItem.label }}
                            </el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-menu-item v-else :index="String(idx)">{{ item.label }}</el-menu-item>
                </router-link>
            </el-menu>
        </div>
        <div class="user-info">
            {{ userInfo.username }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BizHeader',
        props: ['userInfo', 'naviItems'],
    };
</script>

<style lang="less" scoped>
    .user-info {
        position: absolute;
        right: 13px;
        text-align: right;
        top: 78px;
        color: #fff;
    }

    .router-link-exact-active {
        .el-menu-item {
            color: #20a0ff;
        }
    }
</style>
