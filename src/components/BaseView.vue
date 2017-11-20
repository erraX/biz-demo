<template>
<div class="layout">
  <biz-breadcrumb :crumbData="crumbData"></biz-breadcrumb>
  <slot></slot>
</div>
</template>

<script>
import BizBreadcrumb from '@/components/BizBreadcrumb'
export default {
  components: {
    BizBreadcrumb
  },

  computed: {
    crumbData() {
      const match = this.$router.matcher.match
      if (this.$route.path === '/') {
        return []
      }
      const routePaths = this.$route.path.split('/')
      let tracer = ''

      return routePaths.map(path => {
        if (tracer.slice(-1) !== '/') {
          tracer = tracer + '/' + path
        }
        else {
          tracer = tracer + path
        }

        const matchedRoute = match(tracer) || {}

        return {
          to: tracer,
          text: matchedRoute.name,
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>

</style>
