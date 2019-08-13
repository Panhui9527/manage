import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//全局样式
import './assets/css/base.less'

//饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//use一下
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
