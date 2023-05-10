<template>
  <div class="frame">
    <img src="@/assets/background.jpg" class="index-img">
  </div>
  <div class="index-title">
        <span>👏</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
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
.index-title span{
  width: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 40px;
  position: absolute;
  top: 500px ;
  left: 5px;
}
</style>
