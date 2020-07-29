<!--  -->
<template>
  <header>
    <breadcrumb></breadcrumb>
    <div class="right">
      <div class="portrait"></div>
      <div class="drop">
        <span>首页</span>
        <span>退出</span>
      </div>
    </div>
  </header>
</template>

<script>
import breadcrumb from "./breadcrumb";
export default {
  data() {
    return {};
  },
  components: {
    breadcrumb,
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
header {
  position: relative;
  width: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #eff2f7;
  margin-bottom: 50px;
  .right {
    &:hover .drop {
      visibility: visible;
      height: 70px;
    }
    .portrait {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: red;
    }
    .drop {
      z-index: 10;
      transition: all 0.2s linear;
      visibility: hidden;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      top: 60px;
      right: 10px;
      width: 60px;
      height: 0;
      box-shadow: 1px 1px 10px 3px #d8d8d8;
      background-color: #fff;
      span {
        width: 100%;
        text-align: center;
        cursor: pointer;
        &:hover {
          background-color: #d8d8d8;
        }
      }
    }
  }
}
</style>
