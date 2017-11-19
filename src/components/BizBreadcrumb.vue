<template>
<veui-breadcrumb v-if="crumbData.length > 1" :routes="crumbData" @redirect="handleRedirect">
  <span slot-scope="scope"><em>{{ scope.route.text }}</em></span>
  <span slot="separator" slot-scope="scope"> > </span>
</veui-breadcrumb>
</template>

<script>
export default {
  props: {
    crumbData: {
      require: true,
      type: Array,
    },
  },

  methods: {
    handleRedirect(event, router, index) {
      console.log('event', event)
      console.log('router', router)
      console.log('index', index)
    }
  }
}
</script>

<style lang="less" scoped>
.veui-breadcrumb {
  display: block;
  margin-top: 70px;
  overflow: hidden;
}
</style>

