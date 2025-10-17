<template>
  <div class="daily">
    <div id="title">小时预报</div>
    <div class="nav">
      <ul>
        <li>温度</li>
        <li>空气质量</li>
        <li>风况</li>
        <li>紫外线指数</li>
      </ul>
    </div>
    <div id="info">
      <ul>
        <li>
          <div>周一</div>
          <div>10/13</div>
          <div class="icno">🌤</div>
        </li>
        <li>周二</li>
        <li>周三</li>
        <li>周四</li>
        <li>周五</li>
        <li>周六</li>
        <li>周日</li>
      </ul>
      <!--  ref="chartContainer" -->
      <div class="chart" ref="chartContainer"></div>
    </div>
  </div>
</template>

<script setup>
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
        axisLabel:{
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
        label:{
          show:true,
          fontSize:24
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

.nav {
  height: 40px;
}

#title {
  font-size: 24px;
  padding-top: 20px;
  padding-left: 30px;
}

.daily ul {
  margin-top: 40px;
}

.daily .nav ul li {
  float: left;
  height: 60px;
  width: 200px;
  /* font-size: 30px; */
  text-align: center;
  border: solid 1px burlywood;
  border-radius: 25%;
  padding: 20px;
  margin-right: 100px;
  font-size: 24px;
  line-height: 20px;
}

.daily .nav ul li:first-child {
  margin-left: 70px;
}

.daily .nav ul li:last-child {
  margin-right: 0px;
}

#info {
  height: 1200px;
}

#info ul {
  margin-top: 60px;
  height: 80px;
}

#info .chart {
  width: 1200px;
  height: 400px;
  /* background-color: gainsboro; */
  /* margin-left: 20px; */
}

#info ul li {
  float: left;
  width: 160px;
  text-align: center;
}

/* #info div:nth-child(2) {
  margin: 20px;
} */

#info ul li:first-child {
  margin-left: 60px;
}

#info ul li:last-child {
  margin-right: 60px;
}

#info .icno {
  font-size: 30px;
}
</style>
