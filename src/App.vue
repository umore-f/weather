<script setup>
// import axios from 'axios'
// import { onMounted, ref } from 'vue'

// const weatherList = ref({})
// async function getWeather() {
//   const res = await axios({
//     url: 'https://api.openweathermap.org/data/2.5/weather',
//     params: {
//       lat: 60,
//       lon: 90,
//       appid: '6740be84daed82ecdb95bbda6ed1149b'
//     }
//   })
//   weatherList.value = res.data
//   console.log(res.data);
// }
// onMounted(() => getWeather())
import Home from './views/Home.vue';


</script>

<template>
  <div>
    <!-- <div v-if="weatherList.coord">
      地理位置:{{ weatherList.coord.lon }},{{ weatherList.coord.lat }}
    </div>
    <div v-else>加载中...</div> -->

    <Home/>
  </div>
</template>

<style scoped></style>
