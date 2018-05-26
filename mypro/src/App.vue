<template>
  <div id="app">
  		<header>
					<table border="0" cellspacing="10">
						<tr>
							<td>X</td>
							<td class="line"></td>
							<td>微信游戏</td>						
						</tr>
					</table>
  			
  		</header>
    	<section>
    		<router-view></router-view>
    	</section>
    	<footer>
    		<router-link to="/games"><i class="iconfont icon-94"></i><span>游戏</span></router-link>
    		<router-link to="/circles"><i class="iconfont icon-quanzi"></i><span>圈子</span></router-link>
    		<router-link to="/competition"><i class="iconfont icon-dunpai"></i><span>电竞</span></router-link>
    		<router-link to="/my"><i class="iconfont icon-wo"></i><span>我</span></router-link>
    	</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped="">
	#app{
		display:flex;
		flex-direction: column;
		height: 100vh;
	}
	
	section{
		flex: 1;
		overflow: auto;
	}
	
	footer{
		height: 60px;
		text-align: center;
		overflow: hidden;
		background: #fff;
		z-index: 5;
		border-top: 1px solid #eaeaea;
	}
	
	footer a{
		margin-top: 5px;
		float: left;
		width: 25%;
		font-size: 18px;
		color: #999;
		cursor: pointer;
		text-decoration: none;
		display: flex;
		flex-direction: column;
	}

	.router-link-active{
		color: green;
	}
	i{
		font-size: 26px;
	}
	
	
	
	#app .line{
		width: 1px;
		height:20px;
		background: #ccc;
	}
	
</style>
