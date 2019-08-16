//导入axios
import axios from 'axios'

//设置多基地址,并暴露出去
export const http = axios.create({
    baseURL: 'http://localhost:8888/api/private/v1/'
})

//login请求  传入一个带有username,password属性的对象,并返回login请求
export const login = ({ username, password }) => {
    return http.post('login', {
        username,
        password
    })
}

//获取左侧菜单
export const menus = () => {
    return http.get('menus', {
        headers: {
            //发送token
            //key: value
            Authorization: window.localStorage.getItem('token')
        }
    })
}


export const users = ({query,pagenum,pagesize}) =>{
    return http.get('users',{
        params:{
            query,
            pagenum,
            pagesize
        },
        headers:{
            Authorization:window.localStorage.getItem('token')
        }
    })
}