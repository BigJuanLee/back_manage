<!--  -->
<template>
  <div class="home">
    <myTop></myTop>
    <div class="content">
      <h1 class="title">数据统计</h1>
      <div class="section-wrap">
        <section class="today">
          <h2>当日数据</h2>
          <div class="source-wrap">
            <div class="source" v-for="(item, index) in today" :key="index">
              <span class="num">{{ item.num }}</span>
              <span class="title">{{ item.title }}</span>
            </div>
          </div>
        </section>
        <section class="total">
          <h2>总数据</h2>
          <div class="source-wrap">
            <div class="source" v-for="(item, index) in total" :key="index">
              <span class="num">{{ item.num }}</span>
              <span class="title">{{ item.title }}</span>
            </div>
          </div>
        </section>
      </div>
      <myChart></myChart>
    </div>
  </div>
</template>

<script>
// import echarts from "echarts/dist/echarts.js";
import myChart from "components/chart";
export default {
  data() {
    return {
      today: [
        {
          num: 0,
          title: "新增用户",
        },
        {
          num: 7,
          title: "新增订单",
        },
        {
          num: 1000,
          title: "新增管理员",
        },
      ],
      total: [
        {
          num: 42168,
          title: "注册用户",
        },
        {
          num: 13257,
          title: "订单",
        },
        {
          num: 74656,
          title: "管理员",
        },
      ],
      myChart: null,
      options: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  components: { myChart },
  computed: {},
  methods: {
    // initChart() {
    //   this.myChart = echarts.init(this.$refs.main);
    //   console.log(this.$refs.main);
    //   this.myChart.setOption(this.options);
    // },
  },
  activated() {
    this.$api.getManagerCount("2020-07-22").then((res) => {
      console.log(res);
    });
  },
  mounted() {
    // console.log(this.$refs.main);
    // this.initChart();
  },
};
</script>
<style lang="scss" scoped>
.home {
  .content {
    .title {
      text-align: center;
    }
    .section-wrap {
      display: flex;
      justify-content: space-around;

      .today {
        background-color: #ff9800;
      }
      .total {
        background-color: #20a0ff;
      }
      section {
        width: 300px;
        padding-bottom: 30px;
        border-radius: 10px;
        color: #fff;
        h2 {
          text-align: center;
        }
        .source-wrap {
          display: flex;
          justify-content: space-around;
          margin-top: 50px;
          color: black;
          .source {
            display: flex;
            flex-direction: column;
            align-items: center;
            .num {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
