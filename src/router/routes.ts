// 对外暴露配置路由(常量路由)
export const constantRoute = [
    {
        name: 'login',
        path: '/login',
        component: ()=>import('@/views/login/index.vue'),
    },
    {
        name: 'home',
        path: '/',
        component: ()=>import('@/views/home/index.vue'),
    },
    {
        name: '404',
        path: '/404',
        component: ()=>import('@/views/404/index.vue'),
    },
    {
        name: 'any',
        path: '/:pathMatch(.*)*',   // 如果都匹配不上，就重定向到404页面
        redirect: '/404',
    },
]