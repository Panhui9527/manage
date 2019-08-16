import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// //导入全局基地址
// import {http} from './api/axios'

//全局样式
import './assets/css/base.less'

//饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

//导入路由
import router from './router/router'


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
