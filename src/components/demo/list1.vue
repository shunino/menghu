<template>
    <div class="mydemo">
      <div class="demo-head">
          <span class="ml10 xin">专题展示</span>
          <span class="mr10 pointer mya" @click="$commonGo('/show')">更多>></span>
      </div>
      <div class="demo-content">
          <div  v-for="i in tableData" class="demo-list">
            <el-image
              style="width: 100%; height: 200px"
              :src="$URL+'/file/'+i.cover"
              >
            </el-image>
            <div class="center">{{i.name}}</div>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'demo',
    data () {
      return {
        mysearch:{
          searchKey: "",
          countperpage: 6,
          pageno: 1,
        },
        tableData:[]
      }
    },
    mounted () {
      this.getList();
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/maintain/listSpecial',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          for(let i in tableData ){
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mydemo{
    width: 100%;
  }
  .demo-head{
    width:100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:#0C275D ;
    color: white;
  }
  .demo-head .xin{
    font-size: 20px;
  }
  .demo-content{
    display: flex;
    width: 99.8%;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid #E4E7ED;
    justify-content: space-evenly;
    padding-bottom: 30px;
  }
  .demo-list{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-top: 20px;
  }
</style>
