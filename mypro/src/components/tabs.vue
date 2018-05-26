<template>
	<div id="tabs">
		<footer>
    		<router-link to="/games"><i class="iconfont icon-94"></i><span>游戏</span></router-link>
    		<router-link to="/circles"><i class="iconfont icon-quanzi"></i><span>圈子</span></router-link>
    		<router-link to="/competition"><i class="iconfont icon-dunpai"></i><span>电竞</span></router-link>
    		<router-link to="/my"><i class="iconfont icon-wo"></i><span>我</span></router-link>
    	</footer>
	</div>
</template>

<script>
	export default{
		name:'tabs',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
</style>