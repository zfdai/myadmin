import path from './childPath'
export default[
	{
		path:path.childPath+'/home',
		name:'home',
		components:{
			default:resolve => require(['../pages/home'],resolve),
			menu:null
		}
  	},
  	{
		path:path.childPath+'/',
		redirect:path.childPath+'/home'
  	}
]