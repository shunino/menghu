<template>
    <el-carousel height="100%" class="mycarrousel" trigger="click" :autoplay="true">
      <el-carousel-item>
        <img src="../../../static/ti1.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../../static/ti2.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../../static/ti3.jpg">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    name: 'carousel',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<style scoped>
  .mycarrousel{
    width: 500px;
  }
  .mycarrousel img{
      width: 100%;
      height:100%;
  }
</style>
