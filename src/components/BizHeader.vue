<template>
<div v-if="visible" class="header">
  <img class="logo" :src="logo" />
  <div class="navi-container">
    <biz-menu v-for="item in navigations" :key="item.key">
      <router-link
        :to="item.link"
        slot="title"
        :class="{
          [`navi-item item-${item.key}`]: true,
          active: isActive(item.link, true)
        }"
      >
        {{ item.label }}
      </router-link>
      <biz-menu-item v-for="subItem in item.childLinks" :key="subItem.key">
        <router-link
          :class="{
            [`sub-navi-item item-${subItem.key}`]: true,
            active: isActive(subItem.link)
          }"
          :to="subItem.link"
        >
          {{ subItem.label }}
        </router-link>
      </biz-menu-item>
    </biz-menu>
  </div>
  <biz-menu class="user-info">
    <span slot="title">{{ username }}</span>
    <biz-menu-item>
      <span class="info">用户信息</span>
    </biz-menu-item>
    <biz-menu-item>
      <a class="logout" :href="logoutUrl">登出</a>
    </biz-menu-item>
  </biz-menu>
</div>
</template>

<script>
import BizMenu from "@/components/ui/Menu";
import BizMenuItem from "@/components/ui/MenuItem";
import { mapState } from "vuex";
import { navigations } from "@/configs";
import logo from "@/assets/user-logo@2x.png";

export default {
  name: "BizHeader",

  components: {
    BizMenu,
    BizMenuItem
  },

  data() {
    return {
      visible: true,
      navigations,
      logo,
      logoutUrl: "/logout.html"
    };
  },

  computed: {
    ...mapState({
      userInfo: state => state.user.info
    }),

    username() {
      return (this.userInfo && this.userInfo.username) || "";
    }
  },

  methods: {

   /**
    * 当前路由是否激活
    *
    * @param  {string}  path     路径
    * @param  {boolean} isParent 是否是父节点
    * @return {boolean}
    */
    isActive(path, isParent) {
      console.log(this)
      if (!isParent) {
        return path === this.$route.path;
      }

      // 对于父节点，如果子节点高亮的话，该节点也要高亮
      const getTopLevel = path => path.split("/")[1];
      return getTopLevel(path) === getTopLevel(this.$route.path);
    }
  },
};
</script>

<style lang="less" scoped>
@import "../styles/variables.less";
@navi-height: 60px;
.header {
  background-color: @biz-blue-normal;
  height: @navi-height;
  font-size: 18px;
}

.logo {
  float: left;
  width: 230px;
  padding: 12px 12px 0px 50px;
  box-sizing: content-box;
}

.navi-container {
  height: @navi-height;
  font-weight: 400;
  display: inline-block;
}

.sub-navi-item {
  display: block;
  height: @navi-height;
  line-height: @navi-height;
  text-align: center;
  padding: 0 40px;
  &.active {
    background-color: @biz-blue-dark;
  }
}

.navi-item {
  position: relative;
  display: inline-block;
  height: @navi-height;
  line-height: @navi-height;
  text-align: center;
  vertical-align: top;
  padding: 0 40px;
  &.active {
    background-color: @biz-blue-dark;
  }
  &:hover {
    cursor: pointer;
    .navi-dropdown {
      display: block;
    }
  }
}

.navi-dropdown {
  display: none;
  position: absolute;
  top: @navi-height;
  left: 0;
  background-color: @biz-blue-normal;
}

.user-info {
  float: right;
  height: @navi-height;
  line-height: @navi-height;
  .trigger {
    width: 100px;
  }
}
</style>