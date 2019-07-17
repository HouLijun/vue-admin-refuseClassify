import home from '@/moudle/home.vue'
import examining from '../pages/examining.vue'

export default [
	{
        path: '/',
        component: home,
        name: '垃圾分类管理',
        iconCls: 'el-icon-redpacket',
        children: [
            { path: '/examining', component: examining, name: '审题'}
        ]
    },
]