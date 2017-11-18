<template>
<div :class="menuCls">
  <div class="trigger">
    <slot name="title" class="title"></slot>
    <div class="dropdown">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuCls: [
          'menu',
          this.class,
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@bg-color: #4664C0;
@bg-dark: #3855B2;
@menu-height: 60px;

.menu {
  display: inline-block;
  color: #fff;
}

.trigger {
  display: inline-block;
  position: relative;
  height: @menu-height;
  line-height: @menu-height;
  text-align: center;
  background-color: @bg-color;

  &:hover {
    cursor: pointer;
    background-color: @bg-dark;

    .dropdown {
      display: block;
    }
  }

  .title {
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
}
</style>