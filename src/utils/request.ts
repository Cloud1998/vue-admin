// request.ts
// 进行 axios 二次封装，使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 1. 利用 axios 对象的 create 方法，创建 axios 实例，进行配置。
const request = axios.create({
    // 基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 超时时间
    timeout: 5000
})
// 2. 为 axios 实例添加请求拦截器
request.interceptors.request.use((config)=>{
    // 返回配置对象
    return config

})
// 3. 为 axios 实例添加响应拦截器
request.interceptors.response.use((response)=>{
    // 成功回调
    return response.data
}, (error)=>{
    // 失败回调
    let message = ''
    const status = error.response.status
    switch(status){
        case 401:
            message = "TOKEN过期"
            break;
        case 403:
            message = "无权访问"
            break;
        case 404:
            message = "请求地址错误"
            break;
        case 500:
            message = "服务器出现问题"
            break;
        default:
            message = "网络出现问题"
    }
    ElMessage({
        type: 'error',
        message,
    })
    return Promise.reject(error)
})
// 对外暴露
export default request