<template>
	<div id="messes">
		<div style="background: #ffffff;margin-bottom: 15px;">
			<div class="wrapper toux clear">		
				<div><img src="../assets/tiao.jpg" alt="" width="50px"/></div>
				<div class="nickname">
					<p>夏冉ln</p>
				</div>
			</div>
		</div>
		
		<div style="background: #ffffff;">
			<mt-cell title="我的创作" is-link style="margin-left: 15px;">
			</mt-cell>
			<table border="0" cellspacing="10">
				<tr>
					<th>获得的阅读</th>
					<th>获得的回复</th>
					<th>获得的赞</th>					
				</tr>
				<tr class="gr">
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		name:'messes',
		data(){
			return{
				value:''
			}
		}
	}
</script>

<style scoped="">
	#messes{
		height: 100%;
		background: #efeff4;
	}
	.toux div{
		float: left;
		margin: 10px;
	}
	.nickname{
		margin-left: 10px;
	}
	.gr td{
		color: #10b924;
	}
	table{
		width: 100%;
	}
	tr th{
		color: #aeaeae;		
	}
	tr th,tr td{
		width: 33.3%;
		text-align: center;
	}
</style>