import path from './childPath'
export default[
	{
		path:path.childPath+'/webmanage/userInfo',
		name:'userInfo',
		components:{
			default:resolve => require(['../pages/index'],resolve)
		}
  	},
  	{
		path:path.childPath+'/webmanage/resetPwd',
		name:'resetPwd',
		components:{
			default:resolve => require(['../pages/index'],resolve)
		}
  	},
  	{
		path:path.childPath+'/webmanage/userInfo2',
		name:'userInfo2',
		components:{
			default:resolve => require(['../pages/index'],resolve)
		}
  	},
  	{
		path:path.childPath+'/webmanage/resetPwd2',
		name:'resetPwd2',
		components:{
			default:resolve => require(['../pages/index'],resolve)
		}
  	},
  	{
  		path:'/webmanage',
  		redirect:path.childPath+'/webmanage/userInfo'
  	}
]