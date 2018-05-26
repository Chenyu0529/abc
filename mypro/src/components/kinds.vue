<template>
	<div id="kinds" class="clear">
		<div class="searchdiv">
			<input type="text" name="" id="" placeholder="搜索游戏/游戏攻略" class="search"/>
		</div>
		<div style="border-bottom: 1px solid #CCCCCC;">
			<div class="menudiv clear">
				<ul class="kindsmenu" v-for="(item,i) in arr ">
					<router-link :to="{name:'list',query:{item}}" tag="li">
						{{item}}
					</router-link>					
				</ul>
			</div>
		</div>
		
		<div class="kindscon">
			<router-view></router-view>
		</div>
				
		
	</div>
</template>

<script>
	
	export default{
		name:'kinds',
		data(){
			return{
				arr:['畅销榜','好友榜','新游榜','休闲','棋牌','角色','竞技','动作','单机']						
			}
		},
		methods:{
			tap(){
				
			}
		}
	}
	
	
</script>

<style>
	.searchdiv{
		text-align: center;
		margin-bottom: 10px;
	}
	.search{
		border: none;
		width: 95%;
		border: 1px solid #ccc;
		height: 24px;
		border-radius: 5px;
		text-align: center;
		background: #f5f5f5;		
	}
	.kindsmenu li{
		width: 100%;
		height: 56px;		
		line-height: 56px;
		color: #888888;
		text-align: center;
		border-bottom: 1px solid #ececec;
	}
	.router-link-active{
		color: #1aad19
	}
	.menudiv{
		width: 20%;
		float: left;
	}	
	
	.kindscon{
		width: 78%;
		float: right;
		margin-top: 10px;
	}	
</style>