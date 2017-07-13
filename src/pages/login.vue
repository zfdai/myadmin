<template>
	<div class="login-page">
		<div class="form-wrap">
			<h3 class="login-title">
				欢迎登录本系统
			</h3>
			<el-form :model="loginForm" :rules="loginFormFules" ref="loginForm" class="demo-ruleForm">
			  <el-form-item label="用户名" class="relative hide-label" prop="name">
			  	<i class="iconfont icon-user"></i>
			    <el-input type="text" v-model="loginForm.name" @keyup.enter.native="loginFormSubmit" placeholder="请输入用户名" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item  class="relative hide-label" label="密码" prop="password">
			  	<i class="iconfont icon-mima"></i>
			    <el-input type="password" v-model="loginForm.password" @keyup.enter.native="loginFormSubmit" placeholder="请输入密码" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item class="login-btn-item">
			    <el-button class="btn btn-login" type="primary" @click="loginFormSubmit">登录</el-button>
			  </el-form-item>
			  <el-form-item class="remember-item">
			  	<el-checkbox v-model="loginForm.rememberpwd">记住密码</el-checkbox>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>
<style lang="scss"> 
	@import '../assets/scss/common/variable';
	.login-page {
		.hide-label{
			label{
				display: none;
			}
		}
		label{
			color:$white;
		}
		.el-input__inner{
			background: transparent;
			height: 50px;
			text-indent:40px;
			color:$white;
		}
		.el-checkbox__label{
			font-size: 12px;
		}
		.el-checkbox__inner{
			width:14px;
			height: 14px;
		}
		.el-checkbox__inner::after{
			left: 4px;
			top:0;
		}
	}
</style>
<style lang="scss" scoped>
	@import '../assets/scss/common/variable';
	.login-page{
		min-height: 100vh;
		background-color: $gray;
		display: flex;
		justify-content: center;
		align-items: center;
		.login-title{
			color:$white;
			font-size: 30px;
			height: 80px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-family: STXingkai;
		}
		.form-wrap{
			width:500px;
			padding:20px;
			.login-btn-item{
				margin-bottom: 10px;
			}
			.iconfont{
				position: absolute;
				color:#fff;
				font-size: 20px;
				left: 20px;
				top:5px;
			}
			.btn-login{
				width:100%;
			}
		}
	}
</style>
<script>
	export default {
		data(){
			return{
				loginForm:{
					name:'',
					password:'',
					rememberpwd:''
				},
				loginFormFules:{
					name:[
						{required:true,message:'请输入用户名！',trigger: 'blur'}
					],
					password:[
						{required:true,message:'请输入密码！',trigger: 'blur'}
					]
				}
			}
		},
		methods:{
			loginFormSubmit(){
				this.$refs.loginForm.validate((valid) => {
		          if (valid) {
		            console.log('submit!');
		            this.$router.push({name:'home'});
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
			}
		}
	}
</script>
