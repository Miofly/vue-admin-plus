<template>
  <vft-carousel height="200px" direction="vertical" :autoplay="false">
    <vft-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </vft-carousel-item>
  </vft-carousel>
</template>

<style scoped>
.vft-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.vft-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.vft-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
