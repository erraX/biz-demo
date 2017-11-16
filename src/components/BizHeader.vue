<script>
    import NaviItems from '@/configs/NaviItems'

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
                navigations: NaviItems,
            };
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
        background-color: #ffffff;
    }

    .navi-container {
        background-color: #ffffff;
    }

    .user-info {
        background-color: #ffffff;
    }
</style>
