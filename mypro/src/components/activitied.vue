<template>
	<div id="activitied">
		<div class="mess">最近访问</div>	
		<div class="bg">
			<div class="wrapper">
				<div class="newintro">
					<ul class="playgames clear">						
						<li class="clear">  					
							<div class="circle">
								<p>FIFA正版竞技手游预约活动</p>
								<span>5月8日-5月23日</span>									
							</div>
							<div style="float: right;"><img src="../assets/wz.jpg" class="wz"/></div>
						</li>	
					</ul>
				</div>			
			</div>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'activitied',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="">
	#activitied{
		height: 100%;
		background: #efeff4;
	}
	.bg{
		background: #FFFFFF;
	}
	.mess{
		height:40px;
		line-height: 40px;
		padding-left: 10px;
		color: #b3b3b3;
	}
	.playgames li{
		padding: 20px 0;
		position: relative;
	}
	.playgames img{
		width: 50px;
		margin-right: 10px;
		vertical-align: middle;
	}
	.playgames li div{
		float: left;
		margin-left: 6px;
	}
	.playgames .headpic img{
		width: 66px;
		margin-top: 10px;
	}
	/*访问的内容*/
	.circle p{
		color: #000;
		margin-bottom: 10px;
	}
	.circle span{
		color: #b2b2b2;
		font-size: 14px;
	}
</style>