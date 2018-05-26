import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './stylesheet/stylesheet.css'

require('swiper/dist/css/swiper.css')


import { Search } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Switch } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Games from './components/games.vue'
import Newde from './components/newde.vue'
import List from './components/list.vue'
import Kinds from './components/kinds.vue'
import Gift from './components/gift.vue'
import Circles from './components/circles.vue'
import Competition from './components/competition.vue'
import Cirde from './components/cirde.vue'
import Gamesde from './components/gamesde.vue'
import My from './components/my.vue'
import Mywrite from './components/mywrite.vue'
import Activitied from './components/activitied.vue'
import Messes from './components/messes.vue'
import Secsetting from './components/secsetting.vue'
import Sugg from './components/sugg.vue'
import $ from 'jquery'
 

Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);
Vue.component(Switch.name, Switch);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



var routes=[
	{path:'/games',component:Games},
	{path:'/newde',component:Newde},
	{path:'/kinds',component:Kinds,
		children:[ {path:'/list',name:'list',component:List}]
	},
	{path:'/gift',component:Gift},
	{path:'/circles',component:Circles},
	{path:'/competition',component:Competition},
	{path:'/my',component:My},
	{path:'/mywrite',component:Mywrite},
	{path:'/activitied',component:Activitied},
	{path:'/messes',component:Messes},
	

{path:'/secsetting',component:Secsetting},
	{path:'/sugg',component:Sugg},
	{path:'/cirde',component:Cirde},
	{path:'/gamesde',component:Gamesde},
	{path:'*',redirect:'/games'}
]

var router=new VueRouter({
	routes:routes
})


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
