<template>
<div :class="menuCls">
  <div class="trigger">
    <slot name="title"></slot>
  </div>
  <div class="dropdown">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {

  },

  data() {
    return {
      menuCls: [
          'menu',
          this.class,
      ],
    }
  },

  methods: {

  },
}
</script>

<style lang="less" scoped>
@bg-color: #4664C0;
@bg-dark: #3855B2;
@menu-height: 30px;

.menu {
  display: inline-block;
  position: relative;
  color: #fff;

  &:hover {
    cursor: pointer;
    .dropdown {
      display: block;
    }
  }
}

.trigger {
  display: inline-block;
  width: 70px;
  height: @menu-height;
  line-height: @menu-height;
  text-align: center;
  background-color: @bg-color;

  a,
  div,
  span {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}

.dropdown {
  display: none;
  position: absolute;
  top: @menu-height;
  background-color: @bg-color;
  left: 0;
  width: 70px;
}
</style>