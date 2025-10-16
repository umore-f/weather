<template>
  <div class="daily">
    <div id="title">每日预报</div>
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
          <Sunny/>
        </li>
        <li>周二</li>
        <li>周三</li>
        <li>周四</li>
        <li>周五</li>
        <li>周六</li>
        <li>周日</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Sunny from './icon/Sunny.vue';
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
#info ul {
  margin-top: 60px;
}
#info ul li {
  float: left;
  width: 160px;
  text-align: center;
}
#info ul li:first-child {
  margin-left: 60px;
}
#info ul li:last-child {
  margin-right: 60px;
}
</style>
