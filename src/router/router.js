import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'

//use一下
Vue.use(VueRouter)

//导入组件
import login from '../view/login.vue'
import index from '../view/index.vue'
import users from '../view/userlist.vue'

//导入规则
const routes = [
    { path: '/login', component: login },
    { path: '', redirect: '/login' },
    {
        path: '/index', component: index, children: [
            { path: '/users', component: users }
        ]
    }
]

//实例路由
const router = new VueRouter({
    routes
})


//全局守卫,判断是否带token登录
router.beforeEach((to, from, next) => {
    //包含index判断
    if (to.path.indexOf('index') != -1) {
        const token = localStorage.getItem("token");
        //没有返回login
        if (!token) {
            Vue.prototype.$message.warning("请登录");
            router.push("/login");

            //有通过
        } else {
            next();
        }

        //不包含通过
    } else {
        next();
    }
})

export default router;