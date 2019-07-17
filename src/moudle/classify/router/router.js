import home from '@/moudle/home.vue'
import cate from '../pages/cate.vue'
import garbage from '../pages/garbage.vue'

export default [
	{
        path: '/',
        component: home,
        name: '垃圾分类管理',
        iconCls: 'el-icon-classify',
        children: [
            { path: '/cate', component: cate, name: '分类管理'},
            { path: '/garbage', component: garbage, name: '垃圾管理'},
        ]
    },
]