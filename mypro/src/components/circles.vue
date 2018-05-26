<template>
	<div id="circles">
		<div class="wrapper">	    			
			<h3>热门话题</h3>
			<router-link to="/cirde" tag="div" class="contents">
				<p>公布最强的4大射手,孙尚香不是第1,狄仁杰垫底,第一太难却没人玩</p>
    			<span>top4、狄仁杰:狄仁杰在新吧版本更新过后二技能的冷却时间有了明显的增加,如果不增加的话狄仁杰根本就无法被</span>
    			<ul class="topics clear">
					<li><img src="../assets/wz.jpg"/></li>
					<li><img src="../assets/wz.jpg"/></li>
					<li><img src="../assets/wz.jpg"/></li>
				</ul>
    			<div>
    				<span>7527次阅读</span>
    				<b>王者荣耀 游戏圈</b>
    			</div>
			</router-link>			
			<hr />			
			<router-link to="/cirde" tag="div" class="contents">
				<p>公布最强的4大射手,孙尚香不是第1,狄仁杰垫底,第一太难却没人玩</p>
    			<span>top4、狄仁杰:狄仁杰在新吧版本更新过后二技能的冷却时间有了明显的增加,如果不增加的话狄仁杰根本就无法被</span>
    			<ul class="topics clear">
					<li><img src="../assets/wz.jpg"/></li>
					<li><img src="../assets/wz.jpg"/></li>
					<li><img src="../assets/wz.jpg"/></li>
				</ul>
    			<div>
    				<span>7527次阅读</span>
    				<b>王者荣耀 游戏圈</b>
    			</div>
			</router-link>
			<hr />
			<div class="contents">
    			<p>公布最强的4大射手,孙尚香不是第1,狄仁杰垫底,第一太难却没人玩</p>
    			<span>top4、狄仁杰:狄仁杰在新吧版本更新过后二技能的冷却时间有了明显的增加,如果不增加的话狄仁杰根本就无法被</span>
    			<ul class="topics clear">
					<li><img src="../assets/wz.jpg"/></li>
					<li><img src="../assets/wz.jpg"/></li>
					<li><img src="../assets/wz.jpg"/></li>
				</ul>
    			<div>
    				<span>7527次阅读</span>
    				<b>王者荣耀 游戏圈</b>
    			</div>
			</div>
			<hr />
			<div class="contents">
    			<p>公布最强的4大射手,孙尚香不是第1,狄仁杰垫底,第一太难却没人玩</p>
    			<span>top4、狄仁杰:狄仁杰在新吧版本更新过后二技能的冷却时间有了明显的增加,如果不增加的话狄仁杰根本就无法被</span>
    			<ul class="topics clear">
					<li><img src="../assets/wz.jpg"/></li>
					<li><img src="../assets/wz.jpg"/></li>
					<li><img src="../assets/wz.jpg"/></li>
				</ul>
    			<div>
    				<span>7527次阅读</span>
    				<b>王者荣耀 游戏圈</b>
    			</div>
			</div>
			<hr />
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'circles',
		data() {
			return {
	
			}
		},
		methods: {
			tap() {
	
			}
		},
		mounted() {
			
		}
	}
</script>



<style scoped="">
	#circle .wrapper{
		margin: 0 10px;
	}
	
	#circle .wrapper h3{
		line-height: 40px;
	}
	
	.topics li{
		width: 30%;
		float: left;
		margin: 5px;
	}
	.topics li img{
		width: 100%;
	}
	.contents{
		margin: 20px 0;
	}
	.contents b{
		float: right;
	}
	.contents span:nth-of-type(1){
		font-size: 14px;
		color: #888888;
	}
</style>