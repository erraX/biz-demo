<template>
  <div class="hello">
    <biz-menu class="home-menu">
      <router-link to="/home" slot="title">Halo</router-link>
      <biz-menu-item>
        <router-link to="/halo2">halo3</router-link>
      </biz-menu-item>
      <biz-menu-item>
        <router-link to="/halo3">halo4</router-link>
      </biz-menu-item>
    </biz-menu>
  </div>
</template>

<script>
import Menu from '@/components/ui/Menu'
import MenuItem from '@/components/ui/MenuItem'

export default {
  name: 'home',

  components: {
    'biz-menu': Menu,
    'biz-menu-item': MenuItem,
  },

  data() {
    return {
        msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}
</style>