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
import BizFooter from '@/components/BizFooter'
import BizHeader from '@/components/BizHeader'

export default {
  name: 'app',

  components: {
    BizHeader,
    BizFooter,
  },
}
</script>

<style lang="less">
@import "../styles/normalize.less";
@import "../styles/variables.less";

.main {
  margin-top: @header-height;
  padding: 0 50px;
}
</style>