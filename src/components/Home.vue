<template>
  <div class="hello">
    <vi-input v-model="msg"></vi-input>
    {{ msg }}
  </div>
</template>

<script>
import { Input } from 'veui'

export default {
  name: 'home',

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
  color: #42b983;
}
</style>