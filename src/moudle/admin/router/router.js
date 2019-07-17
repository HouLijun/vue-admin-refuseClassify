import home from '@/moudle/home.vue'
import login from '../pages/login.vue'
import admin from '../pages/admin.vue'
import notFound from '../pages/404.vue'

export default [
	{
        path: '/login',
        name: '登录',
        component: login,
        hidden:true,
    },
	{
        path: '/',
        component: home,
        name: '用户管理',
        iconCls: 'el-icon-users',//图标样式class
        children: [
            { path: '/admin', component: admin, name: '后台用户管理'},
            { path: '/notFound', component: notFound, name: '404',hidden:true},
        ]
    },
]