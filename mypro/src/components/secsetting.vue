<template>
	<div id="secsetting">
		<div class="mess">消息通知</div>		
		
		<div class="bg">
			<mt-cell
			  title="接收排行榜赞消息"><mt-switch></mt-switch>
			</mt-cell>
			<mt-cell
			  title="接收游戏圈消息" label="包括赞、回复等游戏圈相关消息"><mt-switch></mt-switch>
			</mt-cell>
			<mt-cell
			  title="接收好友动态赞消息"><mt-switch></mt-switch>
			</mt-cell>
		</div>
		<div class="mess">允许他人访问</div>
		<div class="bg">
			<mt-cell
			  title="我的游戏信息" label="包括排行榜、动态、战绩、个人主页中的在玩信息等"><mt-switch></mt-switch>
			</mt-cell>
			<mt-cell
			  title="我的游戏圈记录" label="包括我的发帖、回复、获得的赞等"><mt-switch></mt-switch>
			</mt-cell>
		</div>
		
		<div class="mess">选择国家/地区版本</div>
		
		<div class="bg">
			<mt-cell
			  title="中国(默认选择)" is-link>
			</mt-cell>			
		</div>
		<div class="mess">允许系统收录与推荐</div>
		<div class="bg">
			<mt-cell
			  title="我的游戏视频" label="关于视频收录与推荐，可点击了解" ><mt-switch></mt-switch>
			</mt-cell>			
		</div>
		<div class="mess" style="border-bottom: 1px solid #dfdfdd;">游戏管理</div>
	</div>
</template>

<script>
	export default{
		name:'secsetting',
		data(){
			return{
				value:''
			}
		}
	}
</script>

<style>
	#secsetting{
		height: 100%;
		background: #efeff4;
	}
	.mess{
		height:40px;
		line-height: 40px;
		padding-left: 10px;
		color: #b3b3b3;
	}
	.btn{
		display: flex;
	}
	.mint-cell{
		border-bottom: 1px solid #dfdfdd;
	}
	.mint-switch-input:checked + .mint-switch-core {
	    border-color: #4cd964;
	    background-color: #4cd964;
	}
	
</style>