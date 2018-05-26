<template>
	<div id="sugg">
		<div class="mess">请选择反馈意见类型</div>		
		
		<div class="bg">
			<mt-cell title="礼包" is-link>
			  <span style="color: #9a9a9a">签到礼包领不到</span>
			</mt-cell>
			<mt-cell title="游戏圈子、攻略" is-link>
				<span style="color: #9a9a9a">无法发帖、无法评论</span>
			</mt-cell>
			<mt-cell title="登录、下载、安装" is-link>
				<span style="color: #9a9a9a">登录失败、下载无反应</span>
			</mt-cell>
			<mt-cell title="异常问题" is-link>
				<span style="color: #9a9a9a">闪退、卡顿、加载慢</span>
			</mt-cell>
			<mt-cell title="新游" is-link>
				<span style="color: #9a9a9a">预约失败、奖励领不到</span>
			</mt-cell>
			<mt-cell title="活动奖励" is-link>
				<span style="color: #9a9a9a">红包、现金券领不到</span>
			</mt-cell>
			<mt-cell title="小程序" is-link>
				<span style="color: #9a9a9a">王者荣耀群排行</span>
			</mt-cell>
			<mt-cell title="对某款游戏的建议意见" is-link>
			</mt-cell>
			<mt-cell title="对游戏中心的建议意见" is-link>
			</mt-cell>
			<mt-cell title="其它">
			</mt-cell>
		</div>			
		
	</div>
</template>

<script>
	export default{
		name:'sugg',
		data(){
			return{
				value:''
			}
		}
	}
</script>

<style>
	#sugg{
		height: 100%;
		background: #efeff4;
	}
	.mess{
		height:40px;
		line-height: 40px;
		padding-left: 10px;
		color: #b3b3b3;
	}
	.mint-cell{
		border-bottom: 1px solid #dfdfdd;
	}
	
	
</style>