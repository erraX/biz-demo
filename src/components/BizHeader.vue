<!--<template>-->
    <!--<div class="header">-->
        <!--<div class="navi-container">-->
            <!--<ul v-for="item in navigations" :class="'navi-' + item.key">-->
                <!--<li><a :href="item.link">{{ item.label }}</a></li>-->
                <!--<div-->
                    <!--v-if="item.childLinks && item.childLinks.length"-->
                    <!--class="dropdown"-->
                <!--&gt;-->
                    <!--<ul>-->
                        <!--<li v-for="childItem in item.childLinks">-->
                            <!--<a :href="childItem.link">{{ childItem.label }}</a>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</ul>-->
        <!--</div>-->
        <!--<div class="user-info">-->
            <!--{{  username }}-->
            <!--<a class="logout" href="/logout.html">登出</a>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<script>
    import Navigations from '@/configs/Navigations'

    export default {
        name: 'BizHeader',

        data() {
            return {

                /**
                 * 已登陆用户名
                 *
                 * @type {string}
                 */
                username: 'niminjie',

                /**
                 * 导航
                 *
                 * @type {Array<Object>}
                 */
                navigations: Navigations,
            };
        },

        methods: {

        },

        render(h) {
            return (
                <div class="header">
                    <div class="navi-container">
                        {
                            this.navigations.map(item =>
                                <div class={'navi-' + item.key}>
                                    <a href={item.link}>{item.label}</a>
                                    {
                                        item.childLinks && item.childLinks.length
                                            ? (
                                                <div class="dropdown">
                                                    {item.childLinks.map(i =>
                                                        <a href={i.link}>{i.label}</a>
                                                    )}
                                                </div>
                                            )
                                            : null
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div class="user-info">
                        {this.username}
                        <a class="logout" href="/logout.html">登出</a>
                    </div>
                </div>
            );
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
