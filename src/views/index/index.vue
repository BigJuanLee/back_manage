<!--  -->
<template>
  <el-container>
    <el-aside>
      <el-menu
        background-color="#324057"
        text-color="#BFCBD9"
        active-text-color="#20A0FF"
        :default-active="$route.path"
        router
      >
        <el-menu-item @click="goHome">
          <i class="icon iconfont" style="margin-right: 10px">&#xe656;</i>
          <span>首页</span>
        </el-menu-item>
        <el-submenu
          :index="index + 1 + ''"
          v-for="(menu, index) in asideMenu"
          :key="index"
        >
          <template slot="title" class="title">
            <i class="icon iconfont" v-html="menu.icon"></i>
            <span>{{ menu.Title }}</span>
          </template>
          <el-menu-item
            :index="sub.index"
            v-for="sub in menu.sub"
            :key="sub.index"
            >{{ sub.Title }}</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        // {
        //   Title: "首页",
        //   icon: "&#xe656;",
        //   sub: [{ Title: "首页", index: "/" }],
        // },
        {
          Title: "数据管理",
          icon: "&#xe629;",
          sub: [
            { Title: "用户列表", index: "/userList" },
            { Title: "商家列表", index: "/shopList" },
            { Title: "食品列表", index: "/foodList" },
            { Title: "订单列表", index: "/orderList" },
            { Title: "管理员列表", index: "/managerList" },
          ],
        },
        {
          Title: "添加数据",
          icon: "&#xe61e;",
          sub: [
            { Title: "添加商铺", index: "/addShop" },
            { Title: "添加商品", index: "/addGoods" },
          ],
        },
        {
          Title: "图表",
          icon: "&#xe670;",
          sub: [{ Title: "用户分布", index: "/user_dis" }],
        },
        {
          Title: "编辑",
          icon: "&#xe604;",
          sub: [{ Title: "文本编辑", index: "/textEdit" }],
        },
        {
          Title: "设置",
          icon: "&#xe611;",
          sub: [{ Title: "管理员设置", index: "/set_up_manager" }],
        },
        {
          Title: "说明",
          icon: "&#xe63d;",
          sub: [{ Title: "说明", index: "/explain" }],
        },
      ],
    };
  },
  components: {},
  computed: {
    // defaultActive: function() {
    //   return this.$route.path.replace("/", "");
    // }
  },
  methods: {
    goHome() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-aside {
    height: 100%;
    &::-webkit-scrollbar {
      width: 0;
    }
    .el-menu {
      min-height: 100%;
      .el-submenu {
        .icon {
          margin-right: 10px;
        }
        .el-menu-item {
          background-color: #1f2d3d !important;
          &:hover {
            background-color: #48576a !important;
          }
        }
      }
    }
  }
  .el-main {
    width: auto;
    padding: 0 0 50px 0;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>
