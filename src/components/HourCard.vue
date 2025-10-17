<template>
  <div class="daily">
    <div id="title"></div>

    <WeatherInfoCard leftTitle="小时预报" isShow=true>
      <div class="chart" ref="chartContainer"></div>
    </WeatherInfoCard>

  </div>
</template>

<script setup>
import WeatherInfoCard from './WeatherInfoCard.vue';
import { ref, onMounted } from 'vue';
// 引入图表
import * as echarts from 'echarts';

// 获取模板引用
const chartContainer = ref(null);

onMounted(() => {
  // 确保容器已挂载
  if (chartContainer.value) {
    // 初始化ECharts实例
    const myChart = echarts.init(chartContainer.value, {
      width: 1240,
      height: 400
    });

    // 准备图表的配置选项
    const option = {
      grid: {
        show: true,
        left: 20
      },
      title: {
        text: '' // 图表标题
      },
      tooltip: { // 提示框组件
        trigger: 'axis'
      },
      xAxis: {
        axisLabel: {
          show: true,
          fontSize: 24
        },
        type: 'category',
        data: ['8:00', '9:00', '10', '11', '12', '1', '2'] // X轴数据
      },
      yAxis: {
        type: 'value', // Y轴类型
        axisLabel: {
          formatter: '{value} ℃'
        }
      },
      series: [{
        name: '气温',
        type: 'line', // 系列类型为折线图
        data: [20, 32, 19, 34, 29, 33, 32], // 系列数据
        smooth: true,
        lineStyle: {
          width: 10,
        },
        label: {
          show: true,
          fontSize: 24
        }
      }]
    };

    // 使用配置项和数据显示图表
    myChart.setOption(option);
  }
});
</script>

<style scoped>
.daily {
  background-color: white;
  height: 500px;
}


.chart {
  width: 1200px;
  height: 400px;
  /* background-color: gainsboro; */
  /* margin-left: 20px; */
}

#info .icno {
  font-size: 30px;
}
</style>
