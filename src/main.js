// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueQuillEditor from 'vue-quill-editor'

import axios from 'axios'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// import VueAMap from 'vue-amap'
// Vue.use(VueAMap)
// VueAMap.initAMapApiLoader({
//   key: '03cd847c738cbf2837432034783bc19d',
//   plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
//   v: '1.4.4',
//   uiVersion: '1.0'})

//通用常量
Vue.prototype.$URL='http://222.85.224.95:9090'
Vue.prototype.$STATE1 = [
  {
    label:'水土流失',
    value:1,
    children:[
      {
        label:'水土流失监测公报',
        value:1,
      },
      {
        label:'水土流失预测数据',
        value:2,
      },
      {
        label:'水土流失消长评价数据',
        value:3,
      },
      {
        label:'水土流失两区区划数据',
        value:4,
      },
    ]
  },
  {
    label:'水土保持',
    value:2,
    children:[
      {
        label:'贵州省土壤侵蚀数据',
        value:1,
      },
      {
        label:'水土保持规划数据',
        value:2,
      },
      {
        label:'水土保持综合治理数据',
        value:3,
      },
      {
        label:'水土保持生态文明示范数据',
        value:4,
      },
    ]
  },
  {
    label:'生产建设项目资料',
    value:3,
    children:[
      {
        label:'项目方案',
        value:1,
      },
      {
        label:'监督检查',
        value:2,
      },
      {
        label:'监测',
        value:3,
      },
      {
        label:'验收',
        value:4,
      },
      {
        label:'备案公示',
        value:5,
      },
      {
        label:'建设单位违规信息',
        value:6,
      },
    ]
  },
  {
    label:'目标考核数据',
    value:4,
    children:[
      {
        label:'目标责任考核',
        value:1,
      }
    ]
  },
  {
    label:'监测站点信息',
    value:5,
    children:[
      {
        label:'监测站点分布',
        value:1,
      },
      {
        label:'多年平均降雨量',
        value:2,
      },
      {
        label:'径流量',
        value:3,
      },
      {
        label:'泥沙量',
        value:4,
      }
    ]
  },
]

Vue.prototype.$STATE = [
  {
    head:'水土流失类',
    mydata:[
      '水土流失两区',
      '水土流失消长',
      '水土流失预测']
  },
  {
    head:'土地资源类',
    mydata:['土壤侵蚀',
      '国家文化自然遗产',
      '地质公园',
      '湿地公园',
      '森林公园',
      '风景名胜区',
      '自然保护区',
      '国土土地利用',
      '岩性分布',
      '土壤分布']
  },
  {
    head:'水资源类',
    mydata:['水源保护区',
      '八大水系',
      '水库',
      '雨量站',
      '水文站']
  },
  {
    head:'生态治理类',
    mydata:['水土保持综合治理',
      '河道管理范围',
      '生态红线']
  },
  {
    head:'社会经济类',
    mydata:['生产建设项目备案公示资料',
      '目标考核',
      '补偿费征收信息',
      '城镇规划',
      '农业产业发展规划',
      '行政区划信息（国家基础地理）']
  },
]

Vue.prototype.$http=axios
//设置cookie
Vue.prototype.$setCookie = function (cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  console.log(cname + "=" + cvalue + "; " + expires);
  document.cookie = cname + "=" + cvalue + "; " + expires;
  console.log(document.cookie);
}
//获取cookie
  Vue.prototype.$getCookie =  function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  console.log("获取cookie,现在循环")
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    console.log(c)
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1){
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

Vue.prototype.$commonGo = function(src){
  this.$router.push({path:src});
}

Vue.prototype.$down = function(id){
  window.open(this.$URL+'/download/'+id);
}

Vue.prototype.$userId = null;
Vue.prototype.$token = null;

//Vue.use(axios);

import $ from 'jquery'

import 'bootstrap'
Vue.use(VueQuillEditor)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
