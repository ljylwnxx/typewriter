<template>
  <div class="frame">
    <img src="@/assets/background.jpg" class="index-img">
  </div>
  <div class="index-title">
        <h2 class="outline-none">
            <TypeIt :values="title" :cursor="false" :speed="150" />
        </h2>
  </div>
</template>

<script setup lang="ts">
import TypeIt from '@/components/typeit'

const title = [
    "陋室铭 -刘禹锡[唐代]",
    "山不在高，有仙则名。" ,
     "水不在深，有龙则灵。",
     "斯是陋室，惟吾德馨。",
     "苔痕上阶绿，草色入帘青。",
     "谈笑有鸿儒，往来无白丁。",
     "可以调素琴，阅金经。",
     "无丝竹之乱耳，无案牍之劳形。",
     "南阳诸葛庐，西蜀子云亭。",
     "孔子云：何陋之有？"
    ]
</script>

<style scoped>
.frame{
    width: 100%;
    height: 100%;
}
.index-img {
    width: 100%;
    height: 100%;
    position: relative;
    border: solid 3px #5d8966;
    border-radius: 20px;
    background-color: #fff7ea;
    background-size: cover;
    transition: all 0.4s ease-in-out;
    z-index: -9;
}
.index-title h2{
  width: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 40px;
  position: absolute;
  top: 500px ;
  left: 5px;
}
</style>
