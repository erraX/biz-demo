<template>
  <div class="home-page">{{ msg }}</div>
</template>

<script>

export default {
  name: 'home',

  data() {
    return {
      msg: 'Welcome',
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