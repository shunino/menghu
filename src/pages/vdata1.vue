<template>
  <div class="data-bg">
    <img class="data-img" src="../assets/vdata/bg1.jpg">
      <div class="data-title">大叔大叔大叔大叔大叔</div>
      <div class="data-content">
        <div class="d-left">
          <!--国家规划-->
          <div class="c-box" style="height: 35%;border:1px solid green;">
          <div class="c-title" style="height: 22%">国家规划</div>
          <div class="c-content" style="height: 78%">
            <div class="round-box">
              <div class="round">
                <div class="round-sum"><img src="../assets/vdata/round.png">55</div>
                <div class="round-text">545454</div>
              </div>
              <div class="round">
                <div class="round-sum"><img src="../assets/vdata/round.png">55</div>
                <div class="round-text">545454</div>
              </div>
              <div class="round">
                <div class="round-sum"><img src="../assets/vdata/round.png">55</div>
                <div class="round-text">545454</div>
              </div>
              <div class="round">
                <div class="round-sum"><img src="../assets/vdata/round.png">55</div>
                <div class="round-text">545454</div>
              </div>
            </div>
          </div>
        </div>
          <!---->
          <div class="c-box" style="height: 57%;border:1px solid green;">
            <div class="c-title" style="height: 12%">监督计划</div>
            <div class="c-content">
              <div class="monitor-box">
                <div class="monitor">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-center">
          <div class="c-box" style="height: 67%;border:1px solid green;">
            <div class="c-title" style="height: 9%"></div>
            <div class="c-content" style="height: 91%">
              <div class="pie-box">
                <div class="pie-title">6666</div>
                <div class="pie-con">
                  <pie1 myid="chart1"></pie1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-right">

        </div>
      </div>
  </div>
</template>

<script>
import Pie1 from '@/components/vdata/pie1'
import Bar1 from '@/components/vdata/bar1'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {

  },
  components: {
    'pie1': Pie1,
    'bar1': Bar1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .round-box{
    width: 95%;
    height: 95%;
    background: none;
    display: -webkit-inline-box;
    overflow: auto;
  }
  .round{
    width: 33.3%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .round .round-sum{
    width: 70%;
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .round .round-sum img{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0px;
    left:0px;
  }
  .round .round-text{
    width: 70%;
    text-align: center;
    margin-top: 8%;
  }

  .pie-box{
    width: 95%;
    height: 95%;
    background: red;
  }
  .pie-title{
    width: 60%;
    height: 6%;
    display: flex;
    align-items: center;
    background: white;
    border-radius: 0 50% 50% 0;
    color: red;
    padding-left: 2%;
  }
  .pie-con{
    width: 100%;
    height: 94%;
  }

  .data-bg{
    width: 100%;
    height: 100%;
  }
  .data-img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0px;
    left: 0px;
    z-index: -1;
  }
  .data-title{
    width:100%;
    height: 8%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .data-content{
    position: absolute;
    top:8%;
    left: 4%;
    display: flex;
    color: white;
    height: 92%;
    width: 96%;
    border:1px solid red;
  }
  .d-left{
    width: 26%;
    border: 1px solid white;
    height: 100%;
  }
  .d-center{
    margin-left: 1%;
    width: 41%;
    border: 1px solid white;
    height: 100%;
  }
  .d-right{
    margin-left: 1%;
    width: 27%;
    border: 1px solid white;
    height: 100%;
  }
  .c-box{
    width: 100%;

  }
  .c-box .c-title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .c-box .c-content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
