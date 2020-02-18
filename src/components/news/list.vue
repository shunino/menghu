<template>
    <div class="mylist">
      <div class="list-head mb10">
        <span  class="ml10 xin">新闻动态</span>
        <span @click="$commonGo('/news')" class="mya">更多新闻>></span>
      </div>
      <div class="list-content">
        <ul class="list-ul" style="overflow:auto">
          <li v-for="i in tableData" class="list-li" @click="goto(i.id)">
            <span class="span1">{{i.createtime}}</span>
            <span class="span4 ml10">{{i.title}}</span>
          </li>
        </ul>
<!--        <div class="fr pointer" @click="$commonGo('/news')">更多新闻</div>-->
      </div>
    </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data:[],
        tableData:[],
        mysearch:{
          searchKey: "",
          countperpage: 8,
          pageno: 1,
        },
      }
    },
    mounted(){
      this.getList();
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/maintain/listNews',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          this.pageno = res.data.data.pageno;
          this.total = res.data.data.total;
          for(let i in this.tableData ){
            this.tableData[i].createtime = this.tableData[i].createtime.split('T')[0];
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      goto(id){
        this.$router.push({path:'/newsDetail',query:{id:id}});
        //this.$router.push({path:'/newsDetail'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mylist{
    height: 100%;
    color: gray;
  }
  .list-head{
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    border-bottom: 3px solid #426EFF;
    justify-content: space-between;
  }
  .list-head .xin{
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
  .list-li{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
  }
  .list-li .span1{
  }
  .list-li .span2{
  }
  .list-li .span3{
  }
  .list-li .span4{
    margin-left: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
