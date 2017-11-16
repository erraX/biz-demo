<template>
  <div id="app">
    <biz-header></biz-header>
    <div class="main">
      <router-view></router-view>
    </div>
    <biz-footer></biz-footer>
  </div>
</template>

<script>
import BizHeader from '@/components/BizHeader'
import BizFooter from '@/components/BizFooter'

export default {
  name: 'app',

  components: {
    BizHeader,
    BizFooter,
  },
}
</script>

<style lang="less">
@import "~veui-theme-x/common.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

.main {
  min-height: 800px;
}

a {
  color: #fff;
  cursor: auto;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
  }
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