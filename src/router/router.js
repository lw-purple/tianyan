import App from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const wifi = r => require.ensure([], () => r(require('../page/wifi/wifi')), 'wifi')
const refresh = r => require.ensure([], () => r(require('../page/refresh/refresh')), 'refresh')
const video = r => require.ensure([], () => r(require('../page/video/video')), 'video')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')
export default [{
  path:'/',
  component:App,
  children:[
    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component:home
    },{
      path:'/wifi',
      component:wifi
    },{
      path:'/refresh',
      redirect: '/home'
    },{
      path:'/video',
      component:video
    },{
      path:'/user',
      component:user
    }
  ]
}]