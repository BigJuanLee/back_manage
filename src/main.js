import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';
import myTop from "./components/header.vue";
import api from "@/utils/api/api";

Vue.prototype.$api = api;
Vue.component("myTop", myTop);
Vue.use(ElementUI);
Vue.config.productionTip = false;

// import AMapLoader from "@amap/amap-jsapi-loader";
// AMapLoader.load({
//   key: "008098ce82dfdbf0d3b6025e59c6a8fd", // 申请好的Web端开发者Key，首次调用 load 时必填
//   version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
//   plugins: ["AMap.Geolocation", "AMap.AutoComplete", "AMap.PlaceSearch"], //插件列表
// });

// AMap.initAMapApiLoader({
//   key: "008098ce82dfdbf0d3b6025e59c6a8fd",
//   plugin: ['AMap.Geolocation']
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')