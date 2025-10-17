<template>
  <div class="frame">
    <div class="text left">{{ leftTitle }}</div>
    <div class="text right">{{ rightTitle }}</div>
    <div v-if="isShow">
      <div class="nav">
        <ul>
          <li>温度</li>
          <li>空气质量</li>
          <li>风况</li>
          <li>紫外线指数</li>
        </ul>
      </div>
    </div>
    <slot name="listData"></slot>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  leftTitle: String,
  rightTitle: String,
  isShow: Boolean
})
</script>

<style scoped>
.frame {
  background-color: rgb(240, 234, 222);
  height: 500px;
  border-radius: 5%;
}

.frame .text {
  font-size: 24px;
  margin: 30px;
}
.frame .nav {
  position: relative;
}
.frame .nav ul{
  /* margin-top: 40px; */
  /* float: left; */
  position: absolute;
  top: -50px;
  left: 30px;
}

.frame .nav ul li {
  float: left;
  height: 60px;
  width: 200px;
  /* font-size: 30px; */
  text-align: center;
  border: solid 1px burlywood;
  border-radius: 25%;
  padding: 20px;
  margin-top: 150px;
  margin-right: 100px;
  font-size: 24px;
  line-height: 20px;
}
.frame .nav ul li:last-child {
  margin-right: 0px;
}
</style>
