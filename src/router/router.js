import demoRoutes from '@/moudle/demo/router/router'
import adminRoutes from '@/moudle/admin/router/router'
import adRoutes from '@/moudle/advertisement/router/router'

export default [
	{
		path: '/', 
		redirect: '/welcome',
		hidden:true
	}
]
.concat(demoRoutes)
.concat(adminRoutes)
.concat(adRoutes);
