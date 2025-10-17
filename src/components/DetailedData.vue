<template>
  <div class="detail">
    <WeatherInfoCard leftTitle="详情数据" rightTitle="下午">
      <div class="info">
        <ul>
          <li><img src="@/assets/icno/露点.svg" alt="">露点13℃</li>
          <li><img src="@/assets/icno/气压.svg" alt="">气压1022毫巴</li>
          <li><img src="@/assets/icno/能见度.svg" alt="">能见度24.1千米</li>
          <li><img src="@/assets/icno/云量.svg" alt="">云量100%</li>
        </ul>
      </div>
    </WeatherInfoCard>

  </div>
</template>

<script setup>
import WeatherInfoCard from './WeatherInfoCard.vue';
</script>

<style scoped>
.detail {
  background-color: burlywood;
  height: 500px;
  position: relative;
  margin-top: 20px;
}

.detail .info {
  height: 400px;
  background-color: red;
  position: absolute;
  top: 100px;
  left: 30px;
}

.detail ul li {
  margin-bottom: 50px;
}

.detail ul li:last-child {
  margin-bottom: 0px;
}
</style>
