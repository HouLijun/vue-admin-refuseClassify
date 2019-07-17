import home from '@/moudle/home.vue'
import adList from '../pages/adList.vue'

export default [
	{
        path: '/',
        component: home,
        name: '广告管理',
        iconCls: 'el-icon-ad',//图标样式class
        children: [
            { path: '/adList', component: adList, name: '广告位列表'}
        ]
    },
]