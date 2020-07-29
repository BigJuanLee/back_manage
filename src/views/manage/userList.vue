<!--  -->
<template>
  <div>
    <myTop></myTop>
    <el-table :data="tableData" border>
      <el-table-column
        v-for="(item, index) in elTableColumn"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      ></el-table-column>
    </el-table>

    <el-pagination
      layout="total, prev, pager, next"
      :total="count"
      :pager-count="7"
      :page-size="20"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      limit: 20, //getUserList限制条数
      offset: 0, //跳过条数
      currentPage: 1, //当前页
      count: 0, //所有用户数量
      elTableColumn: [
        { prop: "id", label: "#", width: "50" },
        { prop: "registe_time", label: "注册日期", width: "180" },
        { prop: "username", label: "用户姓名", width: "180" },
        { prop: "city", label: "注册地址" },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {
    async getUsersList() {
      let userList = await this.$api.getUsersList(this.limit, this.offset);
      console.log(userList.data);
      userList.data.forEach((item, index) => {
        const tableData = {};
        tableData.username = item.username;
        tableData.registe_time = item.registe_time;
        tableData.city = item.city;
        tableData.id = index + 1;
        this.tableData.push(tableData);
      });
    },

    async getUserAll() {
      let userCount = await this.$api.getUserAll();
      this.count = userCount.data.count;
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.offset = (val - 1) * this.limit;
      this.tableData = [];
      this.getUsersList();
    },
  },
  created() {
    this.getUsersList();
    this.getUserAll();
  },
};
</script>
<style lang="scss" scoped></style>
