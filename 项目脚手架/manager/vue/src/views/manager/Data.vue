<template>
  <div>
    <div ref="pieChart" style="width: 50%; height: 400px; float: left;"></div>
    <div ref="barChart" style="width: 50%; height: 400px; float: right;"></div>
    <div ref="lineChart" style="width: 100%; height: 400px; clear: both;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  mounted() {
    this.renderPieChart();
    this.renderLineChart();
    this.renderBarChart();
  },
  methods: {
    renderPieChart() {
      const pieChartData = [
        { value: 33, name: '以物换物' },
        { value: 66, name: '免费共享' },
        { value: 50, name: '二手交易' }
      ];

      const pieChart = echarts.init(this.$refs.pieChart);
      const option = {
        title: {
          text: '今日物品交易方式占比',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '交易方式',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: pieChartData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      pieChart.setOption(option);
    },
    renderLineChart() {
      // 模拟近7天的总交易数量数据
      const lineChartData = [100, 150, 200, 180, 250, 220, 300];

      const lineChart = echarts.init(this.$refs.lineChart);
      const option = {
        title: {
          text: '近7天平台总交易数'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: lineChartData,
          type: 'line'
        }]
      };
      lineChart.setOption(option);
    },
    renderBarChart() {
      const barChartData = [
        { value: 500, name: '图书' },
        { value: 400, name: '家居日用' },
        { value: 300, name: '电子产品' },
        { value: 200, name: '女装' },
        { value: 100, name: '男装' }
      ];

      const barChart = echarts.init(this.$refs.barChart);
      const option = {
        title: {
          text: '物品种类交易数前五'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['图书', '家居日用', '电子产品', '女装', '男装']
        },
        series: [
          {
            name: '交易数',
            type: 'bar',
            data: barChartData
          }
        ]
      };
      barChart.setOption(option);
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
