<style scoped>
  .mytop{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mytop .top-icon{
      height: 100%;
      width: 400px;
      display: flex;
      align-items: center;
  }
</style>
<template>
       <div class="mytop">
          <div class="top-icon ml10">
            <img src="../../assets/icon1.png">
          </div>
         <div class="top-search mr10">
           <el-input
             placeholder="请输入内容"
             prefix-icon="el-icon-search"
             v-model="searchinput"
             @keyup.enter.native="search"
           >
           </el-input>
         </div>
       </div>
</template>

<script>
  $(function () {

  })
export default {
  name: 'Head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchinput:''
    }
  },
  methods:{
    search(){
      this.$alert('搜索失败', '提示', {
        confirmButtonText: '取消',
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

