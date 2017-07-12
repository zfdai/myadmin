<template>
	<div class="router-container">
		<!-- 头部路由 -->
		<router-view name="header"></router-view>
		<el-row>
			<el-col :span="4" v-if="$route.name!='home'" class="relative height1">
				<!-- 菜单 -->
			  	<router-view name="menu"></router-view>
		  	</el-col>
			</el-col>
			<el-col :span="$route.name=='home'?24:20">
				<!-- 内部嵌套路由 -->
			  	<router-view></router-view>
			</el-col>
		</el-row>
		<!-- 底部路由 -->
		<router-view name="footer"></router-view>
  	</div>
</template>
<style scoped>
	.router-container{
		min-height: 100vh;
	}
</style>