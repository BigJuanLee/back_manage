<!--  -->
<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(title, index) in breadCrumb" :key="index">{{
        title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadCrumb: [],
    };
  },
  components: {},
  computed: {},
  methods: {
    getBreadcrumb() {
      let title = this.$route.meta.title;
      if (title[0] !== "首页") {
        title.unshift("首页");
      }
      this.breadCrumb = title;
    },
  },
  created() {
    this.getBreadcrumb();
  },
};
</script>
<style lang="scss" scoped></style>
