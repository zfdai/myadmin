import path from './childPath'
export default[
	{
		path:path.childPath+'/maintenance',
		name:'maintenance',
		components:{
			default:resolve => require(['../pages/index'],resolve)
		}
  	}
]