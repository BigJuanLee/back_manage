<!--  -->
<template>
  <div>
    <myTop></myTop>
    <!-- 表格 -->
    <el-table :data="tableData" border>
      <el-table-column width="50" type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <span>{{ props.row.description }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rating }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.recent_order_num }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        v-for="(item, index) in elTableColumn"
        :key="index"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" @click="toAddFood(scope.row)"
            >添加食品</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
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
    <!-- 对话框 -->
    <el-dialog
      title="提示"
      :visible="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      elTableColumn: [
        { prop: "name", label: "店铺名称", width: "200" },
        { prop: "address", label: "店铺地址", width: "200" },
        { prop: "description", label: "店铺介绍", width: "200" },
      ],
      longitude: "",
      latitude: "", //定位城市经纬度
      offset: 0,
      limit: 20,
      count: 0,
      currentPage: 1, //当前页
      dialogVisible: false,
    };
  },
  components: {},
  computed: {},
  methods: {
    async getRestaurants() {
      let city = await this.$api.getCity("guess");
      let { longitude, latitude } = city.data;
      let obj = {
        longitude,
        latitude,
        offset: this.offset,
        limit: this.limit,
      };
      let restaurantsList = await this.$api.getRestaurants(obj);

      restaurantsList.data.forEach((item) => {
        const tableData = {};
        console.log(tableData);
        tableData.name = item.name;
        tableData.address = item.address;
        tableData.description = item.description;
        tableData.id = item.id;
        tableData.phone = item.phone;
        tableData.rating = item.rating;
        tableData.recent_order_num = item.recent_order_num;
        tableData.category = item.category;
        tableData.image_path = item.image_path;
        this.tableData.push(tableData);
      });
    },
    async getRestaurantsCount() {
      let restaurantsCount = await this.$api.getRestaurantsCount();
      this.count = restaurantsCount.data.count;
    },
    handleEdit(index, row) {
      this.dialogVisible = true;
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.offset = (val - 1) * this.limit;
      this.tableData = [];
      this.getRestaurants();
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    toAddFood(row) {
      this.$router.push({ path: "/addShop", query: { restaurant_id: row.id } });
    },
  },
  created() {
    this.getRestaurantsCount();
    this.getRestaurants();
  },
};
</script>
<style lang="scss" scoped></style>
