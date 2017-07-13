import Vue from 'vue'
import Router from 'vue-router'
import childRouterView from '@src/components/common/childRouterView'
import webManage from '@src/router/webManage'
import home from '@src/router/home'

Vue.use(Router)
import path from './childPath'
let _childRouter = [
    ...webManage,
    ...home
];
let childRouter = _childRouter.map(function (route) {
    route.components = route.components || {};
    route.components.menu = route.components.menu || (route.components.menu === null ? null : (resolve => require(['../components/menu/menu.vue'], resolve)));
    route.components.header = route.components.header ||   (route.components.header === null ? null : (resolve => require(['../components/headers/header.vue'], resolve)));
    route.components.footer = route.components.footer || (route.components.footer === null ? null : (resolve => require(['../components/footer.vue'], resolve)))
    route.components.content = route.components.content || route.component;
    return route
});
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: path.childPath+'/',
      component: childRouterView,
      children:childRouter
    },
    {
      path: path.childPath+'/page404',
      component: resolve => require(['../components/common/error/page404'],resolve),
      name:'page404'
    },
    {
      path: path.childPath+'/login',
      component: resolve => require(['../pages/login.vue'],resolve),
      name:'login'
    },
    // 空路由跳转
    {
      path: '*',
      redirect:'/page404'
    }
  ]
})
