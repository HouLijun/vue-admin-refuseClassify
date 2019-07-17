import classifyRoutes from '@/moudle/classify/router/router'
import adminRoutes from '@/moudle/admin/router/router'
import adRoutes from '@/moudle/advertisement/router/router'
import demoRoutes from '@/moudle/demo/router/router'

export default [
	{
		path: '/', 
		redirect: '/welcome',
		hidden:true
	}
]
.concat(classifyRoutes)
.concat(adminRoutes)
.concat(adRoutes)
.concat(demoRoutes);
