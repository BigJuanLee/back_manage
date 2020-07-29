<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>

<style lang="scss">
#app,
body,
html {
  margin: 0;
  height: 100%;
  .el-submenu__title:hover {
    background-color: #48576a !important;
  }
  .el-table {
    width: 90%;
    margin: 50px auto;
  }
  .el-pagination {
    text-align: center;
  }
}
</style>
