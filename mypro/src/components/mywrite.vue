<template>
	<div id="mywrite">
		<div style="background: #ffffff;margin-bottom: 15px;">
			<div class="wrapper toux clear">		
				<div><img src="../assets/tiao.jpg" alt="" width="70px"/></div>
				<div class="nickname">
					<p>夏冉ln</p>
					<table border="0" cellspacing="10">
						<tr>
							<td>获得的阅读</td>
							<td>获得的回复</td>
							<td>获得的赞</td>					
						</tr>
						<tr class="gr">
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
					
		<div class="bg">
			<mt-cell
			  title="最近浏览" to="//github.com" is-link>
			</mt-cell>
			<mt-cell
			  title="我的收藏" is-link>
			</mt-cell>
		</div>
	
		<div class="mybg">
			<ul class="mytopic clear">
				<li class="active">我的话题</li>
				<li>我的回复</li>
				<li>我的赞过</li>
			</ul>
			<div class="mycontents">
				<p>暂无数据</p>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'mywrite',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="">
	#mywrite{
		background: #efeff4;
	}
	.toux div{
		float: left;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.nickname{
		margin-left: 10px;
	}
	table{
		margin-left: -10px;
	}
	table td{
		padding-right: 5px;
	}
	.mybg{
		margin-top: 20px;
		background: #FFFFFF;
	}
	.mytopic{
		display: flex;
	}
	.mytopic li{
		width: 33.3%;
		text-align: center;
		height: 60px;
		line-height: 60px;
		font-size: 18px;		
	}
	.active{
		color: #10b924;
		border-bottom: 2px solid #10b924;
	}
	.mycontents p{
		padding-top: 20px;
		text-align: center;
		color: #b2b2b2;
	}
</style>