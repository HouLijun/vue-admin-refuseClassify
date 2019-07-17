import home from '@/moudle/home.vue'
import welcome from '../pages/welcome.vue'
import table from '../pages/table.vue'
import form from '../pages/form.vue'
import echarts from '../pages/echarts.vue'

export default [
	{
        path: '/',
        component: home,
        name: '示例',
        iconCls: 'el-icon-case',//图标样式class
        children: [
            { path: '/welcome', component: welcome, name: '欢迎'},
            { path: '/table', component: table, name: '表格'},
            { path: '/form', component: form, name: '表单'},
            { path: '/echarts', component: echarts, name: '图表'}
        ]
    },
]