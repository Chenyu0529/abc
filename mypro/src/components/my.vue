<template>
	<div id="my">
		<div style="background: #FFFFFF;">
			<div class="wrapper" style="padding: 10px 0;">		
				<router-link to="/messes" class="messages clear">
					<div><img src="../assets/tiao.jpg" alt="" width="50px"/></div>
					<div class="nickname">
						<p>hello</p>
						<p>查看我的游戏主页</p>
					</div>
					
					<div class="right"></div>
				</router-link>
			</div>
		</div>
		
		<div class="bg">
			<mt-cell
			  title="我的消息" to="//github.com" is-link>
			</mt-cell>
			<mt-cell
			  title="我访问过的活动" to="/activitied" is-link>
			</mt-cell>
		</div>
		<div class="bg">
			<mt-cell
			  title="我的游戏" is-link>
			</mt-cell>
		</div>
		
		<div class="bg">
			<mt-cell
			  title="我的创作" to="/mywrite" is-link>
			</mt-cell>
			<mt-cell
			  title="我的收藏" is-link>
			</mt-cell>
			<mt-cell
			  title="最近浏览" is-link>
			</mt-cell>
		</div>
		<div>
			<mt-cell
			  title="隐私设置" to="/secsetting" is-link>
			</mt-cell>
			<mt-cell
			  title="意见反馈" to="/sugg" is-link>
			</mt-cell>			
		</div>
		
		
		
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'my',
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
	#my{
		height: 100%;
		background: #eeeeee;
	}	
	.bg{
		margin: 15px 0;
	}
	.mint-cell-label{
		margin-left: 11%;
	}
	.mint-cell-wrapper{
		border-bottom: 1px solid #ccc;
	}
	.messages{
		display: block;
		position: relative;
		margin-top: 10px;
	}
	.messages div{
		float: left;
	}
	.nickname{
		margin-left: 10px;
	}
	.messages .right{
		position: absolute;
		right: 3%;
		top: 22px;
		border: solid 2px #c8c8cd;
	    border-bottom-width: 0;
	    border-left-width: 0;
	    content: " ";
	    width: 5px;
	    height: 5px;
	    -webkit-transform: translateY(-50%) rotate(45deg);
	    transform: translateY(-50%) rotate(45deg);
	}
	
</style>