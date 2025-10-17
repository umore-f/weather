<template>
  <div class="air">
    <div class="left title">空气质量</div>
    <div class="right title">今日</div>
    <div class="pie" ref="pieChartContainer"></div>
    <div class="histogram" ref="histogramContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// 引入图表
import * as echarts from 'echarts';

// 获取模板引用
const pieChartContainer = ref(null);
const histogramContainer = ref(null)
onMounted(() => {
  // 确保容器已挂载
  if (pieChartContainer.value) {
    // 初始化ECharts实例
    const myChart = echarts.init(pieChartContainer.value);

    // 准备图表的配置选项
    const option = {
      title: {
        text: '空气质量',
        left: 'center',
        top: 'center'
      },
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 234,
              name: '联盟广告'
            },
            {
              value: 1548,
              name: '搜索引擎'
            }
          ],
          radius: ['50%', '90%']
        }
      ]
    }
    // 使用配置项和数据显示图表
    myChart.setOption(option);
  }
  if (histogramContainer.value) {
    // 初始化ECharts实例
    const myChart = echarts.init(histogramContainer.value);

    // 准备图表的配置选项
    const option = {
      xAxis: {
        data: ['PM2.5', 'PM10', `O`, 'NO', 'S0', 'C0']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25]
        },
      ]
    }
    // 使用配置项和数据显示图表
    myChart.setOption(option);
  }
});
</script>

<style scoped>
.air {
  background-color: red;
  height: 500px;
  margin-top: 200px;
  position: relative;
}

.air .title {
  font-size: 24px;
  margin: 30px;
}

.air .pie {
  background-color: wheat;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 100px;
}

.air .histogram {
  background-color: wheat;
  width: 700px;
  height: 400px;
  position: absolute;
  top: 100px;
  left: 540px;
}
</style>
