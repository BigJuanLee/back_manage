<template>
  <div ref="main" style="width: 1000px;height: 400px;" class="main"></div>
</template>
<script>
import echarts from "echarts/dist/echarts.js";
export default {
  data() {
    return {
      myChart: null,
      options: {
        title: {
          text: "走势图",
        },
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            magicType: {
              show: true,
              type: ["line", "stack", "tiled"],
            },
            dataView: {
              show: true,
              readOnly: false,
            },
            restore: {
              show: true,
            },
          },
        },

        legend: {
          data: ["新注册用户", "新增订单", "新增管理员"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "新注册用户",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            name: "新增订单",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            name: "新增管理员",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(this.$refs.main);
      this.myChart.setOption(this.options);
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>
<style lang="scss">
.main {
  margin: 50px auto;
}
</style>
