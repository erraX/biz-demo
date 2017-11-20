<template>
  <div v-show="visible" class="loading">
    <div class="content">
      <veui-progress ui="tiny" type="circular" :value="Number(0.5)" desc :auto-succeed="200"></veui-progress>
      <div>正在加载数据中,请稍候...</div>
    </div>
  </div>
</template>

<script>
import { Progress } from 'veui'
export default {
  components: {
    'veui-progress': Progress,
  },

  data() {
    return {
      visible: true
    };
  },

  methods: {
    show() {
      this.visible = true
    },

    hide() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9998;
}

.content {
  position: absolute;
  top: 20%;
  left: 50%;
}
</style>