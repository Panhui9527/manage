import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//全局样式
import './assets/css/base.less'

//饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

//导入vue-router
import VueRouter from 'vue-router'

//use一下
Vue.use(VueRouter)

//导入组件
import login from './components/login.vue'

//导入规则
const routes = [
    { path: '/login', component: login },
    { path: '', redirect: '/login' }
]

//实例路由
const router = new VueRouter({
    routes
})


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
