<template>
    <div class="header">
        <div class="navi-container">
            <el-menu
                theme="dark"
                mode="horizontal"
                :default-active="defaultActiveIdx"
                @select="onSelectMenu"
            >
                <el-submenu 
                    v-for="(item, idx) in naviItems"
                    v-if="item.childLinks && item.childLinks.length" 
                    :key="idx"
                    :index="String(idx)"
                >
                    <template slot="title">
                        <router-link :to="item.link">{{ item.label }}</router-link>
                    </template>
                    <el-menu-item 
                        v-for="(subItem, idx2) in item.childLinks"
                        :index="idx + '-' + idx2"
                        :key="idx + '-' + idx2"
                    >
                        <router-link :to="subItem.link">{{ subItem.label }}</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="String(idx)">
                    <router-link :to="item.link">{{ item.label }}</router-link>
                </el-menu-item>
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

        data() {
            return {
                activeIdx: null,
            };
        },

        computed: {
            defaultActiveIdx() {
                return '0';
            },
        },

        methods: {
            onSelectMenu(index) {
                this.activeIdx = index;
            },
        },
    };
</script>

<style lang="less" scoped>
    .header {

    }

    .navi-container {

    }

    .user-info {

    }
</style>
