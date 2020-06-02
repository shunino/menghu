<template>
    <div class="myfooter">
        <div class="footer-left">
          <span style="color:#FF620C;">友情链接：</span>
          <a
            href="http://www.swcc.org.cn/"
            target="_blank"
          >
            中国水土保持生态网
          </a>
         <!--  <a
            href="https://www.bidcenter.com.cn/newssearchyz-63334594.html"
            target="_blank"
          >
            贵州水土保持监测站
          </a> -->
          <a
            href="http://www.gzmwr.gov.cn/slxw/dfdt/201804/t20180404_3108351.html"
            target="_blank"
          >
            贵州省水利厅
          </a>
        </div>
        <div class="footer-right">
        <!--   <span>关于我们</span>
          <span>@贵州东方世纪科技股份有限公司</span>
          <span>黔公安网 00000000号</span> -->
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Head',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myfooter{
    /*position: absolute;*/
    /*bottom: 0px;*/
    /*left: 0px;*/
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 90px;
    color:white;
    /*margin-top: 40px;*/
    font-size: 14px;
    flex-direction: column;
    justify-content: center;
    background:linear-gradient(90deg,rgba(4,68,155,1),rgba(16,92,196,1));
  }
  .footer-left{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    color: #00A8FF;
    width: 354px;
    justify-content: space-around;
  }
  .footer-left span{
    display: inline-block;
    color: #FFFFFF;
  }
  .footer-left a{
    display: inline-block;
    color: #FFFFFF !important;
  }
  .footer-right{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    color: #FF620C;
    margin-top: 17px;
    width: 455px;
    justify-content: space-around;
  }

</style>
