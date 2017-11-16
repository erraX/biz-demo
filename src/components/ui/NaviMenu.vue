<template lang="html">
<div :class="menuCls">
    <div
        v-for="item in items"
        :key="item.key"
        :class="{ item: true, active: isActive(item.link, true)}"
    >
        <router-link :to="item.link">{{ item.label }}</router-link>
        <div
            ref="subItemContainer"
            class="subitem-container"
            v-if="item.childLinks && item.childLinks.length"
        >
            <div
                v-for="subItem in item.childLinks"
                :key="subItem.key"
                :class="{ subitem: true, active: isActive(subItem.link)}"
            >
                <router-link :to="subItem.link">{{ subItem.label }}</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    name: 'NaviMenu',

    props: {

        /**
         * 导航树结构
         *
         * @type {Object}
         */
        items: {
            type: Array,
            default: [],
            required: true,
        },
    },

    data() {
        return {

            /**
             * 组件类名
             *
             * @type {Array}
             */
            menuCls: [
                'navi-menu',
                this.class,
            ],
        };
    },

    methods: {

        /**
         * 当前路由是否激活
         *
         * @param  {string} path 路径
         * @param  {boolean} isParent 是否是父节点
         * @return {boolean}
         */
        isActive(path, isParent) {
            if (!isParent) {
                return path === this.$route.path;
            }

            // 对于父节点，如果子节点高亮的话，该节点也要高亮
            const getTopLevel = path => path.split('/')[1];
            return getTopLevel(path) === getTopLevel(this.$route.path);
        },
    },
}
</script>

<style lang="less" scoped>

@bgColor: #3463c1;
@bgDark: #2454B3;
@menuHeight: 70px;

.navi-menu {
    background-color: @bgColor;
    height: @menuHeight;
    line-height: @menuHeight;
}

.item,
.subitem {
    a {
        width: 100%;
        height: 100%;
        display: inline-block;
    }

    &.active {
        background-color: @bgDark;
    }
}

.item {
    position: relative;
    display: inline-block;
    width: 100px;
    text-align: center;

    &:hover {
        .subitem-container {
            display: block;
        }
    }
}

.subitem-container {
    position: absolute;
    background-color: @bgColor;
    display: none;
    width: 100px;
    left: 0;
    top: @menuHeight;
    z-index: 999;

    .subitem {
        height: 50px;
        line-height: 50px;
    }
}
</style>
