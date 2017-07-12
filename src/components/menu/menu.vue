<template>
	<div class="menu-web-manage">
		<div class="menu-scoll-wrap" :style="">
			<el-menu :default-active="defaultActive" class="el-menu-vertical-demo" :router="true" :default-openeds="menuOpends">
				<el-menu-item index="/home">后台首页</el-menu-item>
				<div v-for="(item,index) in menuList">
					<el-menu-item v-if="!item.children||item.children.length==0" :index="item.href">
						<i :class="'iconfont '+item.icon"></i>&nbsp;{{item.title}}
					</el-menu-item>
					<el-submenu v-else :index="item.title">
				        <template slot="title"><i :class="'iconfont '+item.icon"></i>&nbsp;{{item.title}}</template>
			          	<el-menu-item v-for="(item2,index2) in item.children" :key="index2" :index="item2.href">
							<i :class="'iconfont iconfont-sub '+(item2.icon||'')"></i>&nbsp;{{item2.title}}
						</el-menu-item>
			      	</el-submenu>
				</div>
		    </el-menu>
	    </div>
	</div>
</template>
<style lang="scss">
	.el-submenu.is-active .el-menu{
		display: block;
	}
</style>
<style lang="scss" scoped>
	@import '../../assets/scss/common/variable';
	.menu-web-manage{
		position: relative;
		z-index: 2;
		width:100%;
		position: absolute;
		background-color: $gray;
		box-sizing:border-box;
		overflow: hidden;
		padding: 60px 0 50px 0;
		margin-top: -60px;
		height: 100vh;
		i.iconfont{
			width:20px;
			display: inline-block;
		}
		.menu-scoll-wrap{
		    height: 100%;
			overflow-y: scroll;
			margin-right: -20px;
		}
	}
</style>
<script>
	export default{
		data(){
			return{
				defaultActive:'/',
				menuList:[],
				menuOpends:[]
			}
		},
		created(){
			this.init();
			this.setActiveMenu();
		},
		methods:{
			init(){
				axios.get('/static/data/leftMenuData.json').then((res)=>{
					this.menuList = res;
					this.setMenuOpends();
				});
			},
			setActiveMenu(){
				let _path_arr = location.hash.split('/'),
					_active_path = `/${_path_arr[1]}/${_path_arr[2]}`;
				this.defaultActive = _active_path;
			},
			// 刷新展开菜单
			setMenuOpends(){
				this.menuOpends = [];
				this.menuList.forEach((item,index)=>{
					if(item.children&&item.children.length!=0){
						item.children.forEach((item2,index2)=>{
							if(item2.href==this.defaultActive){
								this.menuOpends.push(item.title);
							}
						})
					}
				})
			}
		}
	}
</script>