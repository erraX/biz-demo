<template>
  <div :class="menuItemCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItemCls: [
        "menu-item",
         this.class
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@bg-dark: #3855B2;

.menu-item {
  height: 30px;
  line-height: 30px;
  text-align: center;

  a,
  div,
  span {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: @bg-dark;
    cursor: pointer;
  }
}

</style>