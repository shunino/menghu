<template>
  <div class="commondiv">
    <div style="width: 95%;">
      <div class="mt20" style="display: flex;height: 300px;">
        <carousel style="width: 50%"></carousel>
        <mylist style="width: 48%;margin-left: 2%"></mylist>
      </div>

      <div class="mt20 homeTwo" style="display: flex;">
        <el-tabs v-model="activeName" style="width: 68%;margin-right: 2%">
          <el-tab-pane label="最新数据" name="first">
            <commonList :mydata="tableData1"></commonList>
          </el-tab-pane>
          <el-tab-pane label="热门数据" name="second">
            <commonList :mydata="tableData2"></commonList>
          </el-tab-pane>
        </el-tabs>
        <rank style="width:30%;"></rank>
      </div>

      <div class="mt20" style="display: flex;">
        <demoList></demoList>
      </div>
    </div>
  </div>
</template>
<style>
  .homeTwo .el-tabs{
    border: 1px solid #E4E7ED;
    padding-left: 10px;
  }
  .homeTwo .el-tabs__item.is-active{
    color: #426EFF;
  }
  .homeTwo .el-tabs__active-bar{
    background: #426EFF;
  }
</style>
<script>
import Head from '@/components/home/Head'
import Top from '@/components/home/top'
import Carousel from '@/components/home/carousel'
import Rank from '@/components/home/rank'
import Footer from '@/components/home/footer'

import Table from '@/components/news/table'
import List from '@/components/news/list'
import NewDetail from '@/components/news/detail'

import DemoList from '@/components/demo/list1'

import CommonList from '@/components/common/list'
import Richtxt from '@/components/common/richtxt'

import DataItem from '@/components/datas/item'
import DataTag from '@/components/datas/tag'
import DataClass from '@/components/datas/class'
import DataItemHead from '@/components/datas/itemHead'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeName:'first',
      mysearch1:{
        sort:1,
        total:10,
      },
      mysearch2:{
        sort:2,
        total:10
      },
      tableData1:[],
      tableData2:[],
    }
  },
  mounted(){
    $('.head-left').find('span').removeClass('cur');
    $('#home').addClass('cur');

    this.getList1();
    this.getList2();
  },
  methods:{
    getList1() {
      this.$http.post('api/resshare/datacenter/listBySort',this.mysearch1).then(res => {
        this.tableData1 = res.data.data;
        for(let i in this.tableData1 ){
          this.tableData1[i].createtime = this.tableData1[i].createtime.split('T')[0];
        }
        console.log(res);
      }).catch(err => {
        console.log(err)
      })
    },
    getList2() {
      this.$http.post('api/resshare/datacenter/listBySort',this.mysearch2).then(res => {
        this.tableData2 = res.data.data;
        for(let i in this.tableData2 ){
          this.tableData2[i].createtime = this.tableData2[i].createtime.split('T')[0];
        }
        console.log(res);
      }).catch(err => {
        console.log(err)
      })
    },
    // randomsort (a, b) {
    //   return Math.random() > .5 ? -1 : 1;
    //   //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    // },
  },
  components: {
    'myhead': Head,
    'carousel': Carousel,
    'rank': Rank,
    'myfooter': Footer,
    'newstable': Table,
    'mylist': List,
    'demoList': DemoList,
    'commonList': CommonList,
    'newDetail': NewDetail,
    'dataItem': DataItem,
    'dataTag': DataTag,
    'dataClass': DataClass,
    'dataItemHead': DataItemHead,
    'richtxt':Richtxt,
    'top':Top
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
