<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <!-- 表头 -->
    <div class="title-nav">
      <div class="left">
        <a id="position" href="">
          <el-icon :size="40">
            <Aim style="float: left;" />
          </el-icon>
          <span>当前位置(,)</span>
        </a>
        <div id="time"><el-icon :size="40">
            <Clock />
          </el-icon>当前时间</div>
      </div>

      <ul class="right">
        <li><a href=""> <el-icon :size="40">
              <EditPen />
            </el-icon></a></li>
        <li><a href=""> <el-icon :size="40">
              <Bell />
            </el-icon></a></li>
        <li><a href=""> <el-icon :size="40">
              <Setting />
            </el-icon></a></li>
      </ul>
    </div>
    <!-- 主要显示区 -->
    <div class="main-display container">
      <div class="weather-info-display">
        <div class="up-info">
          <div>20</div>
          <div>阴天</div>
        </div>
        <div class="down-info">
          <ul>
            <li><p>19度</p><p>体感</p></li>
            <li><p>5.2米每秒</p><p>风况</p></li>
            <li><p>4中</p><p>紫外线指数</p></li>
            <li><p>74%</p><p>相对湿度</p></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
.title-nav {
  height: 150px;
}

.title-nav ul li {
  float: left;
}

#position {
  font-size: 32px;
  text-align: center;
}


.title-nav ul li .el-icon {
  margin-top: 15px;
  margin-right: 30px;
}

#position .el-icon {
  margin: 15px 20px 0px 20px;
}

#time {
  font-size: 24px;
}

#time .el-icon {
  margin: 20px 20px 0px 20px;
}

.main-display {
  /* position: relative; */
  height: 800px;
}

.weather-info-display .up-info {
  height: 300px;
  width: 300px;
  /* background-color: blanchedalmond; */
  /* position: absolute; */
  /* top: 200px;
  left: 470px; */
  border-bottom: solid 1px wheat;
  margin: 0 auto;
}

.weather-info-display .up-info {
  margin-bottom: 60px;
}
.weather-info-display .up-info div:first-child {
  font-size: 120px;
  text-align: center;
  margin-top: 50px;

}

.weather-info-display .up-info div:last-child {
  text-align: center;
  font-size: 40px;
}

.weather-info-display .down-info {
  height: 300px;
  width: 600px;
  margin: 0 auto;

}

.weather-info-display .down-info li {
  height: 100px;
  width: 80px;
  float: left;
  margin-right: 70px;
  background-image: url('@/assets/icno/温度.svg');
  background-repeat: no-repeat;
  background-position: center;
}
.weather-info-display .down-info li:first-child {
  margin-left: 35px;
}
.weather-info-display .down-info li:last-child {
  margin-right: 35px;
}
.weather-info-display .down-info li p {
  font-size: 16px;
}
.weather-info-display .down-info li p:first-child {
  margin-top: 90px;
  text-align: center;
}
.weather-info-display .down-info li p:last-child {
  text-align: center;
}
</style>
