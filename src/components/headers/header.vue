<template>
	<div class="header-page padding-l-r-20">
		<div class="logo">
			后台管理系统
		</div>
		<div class="menu">
			<el-menu :default-active="defaultActive"  mode="horizontal" class="el-menu-demo" :router="true">
				<template v-for="(item,index) in menuList">
					<el-menu-item v-if="!item.children||item.children.length==0" :index="item.href">{{item.title}}</el-menu-item>
					<el-submenu v-else :index="item.title">
				        <template slot="title"><i class="iconfont"></i>&nbsp;{{item.title}}</template>
			          	<el-menu-item v-for="(item2,index2) in item.children" :key="index2" :index="item2.href">{{item2.title}}</el-menu-item>
			      	</el-submenu>
				</template> 
		    </el-menu>
		</div>
	</div>
</template>
<style lang="scss">
	@import '../../assets/scss/common/variable';
	.header-page {
		position: relative;
		z-index: 3;
		.el-submenu__title{
			color:$white;
			&+.el-menu>li{
				color:$gray;
			}
			&:hover{
				background-color: transparent;
			}
		}
		.menu .el-menu--horizontal>.el-menu-item:hover{
			background-color: transparent;
		}
		.el-menu--horizontal>.el-menu-item.is-active{
		    border-bottom: 5px solid $theme;
		}
	}
</style>
<style lang="scss" scoped>
	@import '../../assets/scss/common/variable';
	.header-page{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #393d49;
		.logo{
			color:$white;
		}
		.menu{
			&>.el-menu{
				background-color: transparent;
				&>li{
					color:$white;
				}
			}
		}
	}
</style>
<script>
	import { mapState } from 'vuex'
	export default{
		data() {
	      return {
	        defaultActive:'/',
			menuList:[]
	      };
	    },
	    created(){
	    	this.init();
	    	this.setActiveMenu();
	    },
	    methods: {
	    	init(){
				axios.get('/static/data/topMenuData.json').then((res)=>{
					this.menuList = res;
				});
			},
	      	handleSelect(key, keyPath) {
	        	console.log(key, keyPath);
	      	},
	      	setActiveMenu(){
				let _path_arr = location.hash.split('/'),
					_active_path = `/${_path_arr[1]}`;
				this.defaultActive = _active_path;
			},
	    },
	    watch:{
	    	$route:function(val){
	    		if(val.name=='home'){
	    			this.defaultActive = '/';
	    		}
	    	}
	    }
	}
</script>