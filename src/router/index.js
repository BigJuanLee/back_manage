import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "index",
    component: index,
    redirect: "/home",
    children: [{
        path: "/home",
        name: "home",
        meta: {
          title: ["首页"]
        },
        component: () => import("../views/index/home.vue")
      },
      {
        path: "/userList",
        name: "userList",
        component: () => import("../views/manage/userList.vue"),
        meta: {
          title: ["数据管理", "用户列表"]
        }
      },
      {
        path: "/shopList",
        name: "shopList",
        component: () => import("../views/manage/shopList.vue"),
        meta: {
          title: ["数据管理", "商家列表"]
        }
      },
      {
        path: "/foodList",
        name: "foodList",
        component: () => import("../views/manage/foodList.vue"),
        meta: {
          title: ["数据管理", "食品列表"]
        }
      },
      {
        path: "/orderList",
        name: "orderList",
        component: () => import("../views/manage/orderList.vue"),
        meta: {
          title: ["数据管理", "订单列表"]
        }
      },
      {
        path: "/managerList",
        name: "managerList",
        component: () => import("../views/manage/managerList.vue"),
        meta: {
          title: ["数据管理", "管理员列表"]
        }
      },
      {
        path: "/addGoods",
        name: "addGoods",
        component: () => import("../views/add/goods.vue"),
        meta: {
          title: ["添加数据", "添加商品"]
        }
      },
      {
        path: "/addShop",
        name: "addShop",
        component: () => import("../views/add/shop.vue"),
        meta: {
          title: ["添加数据", "添加商铺"]
        }
      },
      {
        path: "/user_dis",
        name: "user_dis",
        component: () => import("../views/chart/user_distrubution.vue"),
        meta: {
          title: ["图表", "用户分布"]
        }
      },
      {
        path: "/textEdit",
        name: "textEdit",
        component: () => import("../views/edit/text.vue"),
        meta: {
          title: ["编辑", "文本编辑"]
        }
      },
      {
        path: "/set_up_manager",
        name: "set_up_manager",
        component: () => import("../views/set_up/manager.vue"),
        meta: {
          title: ["设置", "管理员设置"]
        }
      },
      {
        path: "/explain",
        name: "explain",
        component: () => import("../views/explain/explain.vue"),
        meta: {
          title: ["说明", "说明"]
        }
      },
    ]
  },

]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router