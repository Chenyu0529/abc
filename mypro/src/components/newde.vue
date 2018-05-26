<template>
	<div id="newde">
		<div class="toppic">
			<img src="../assets/xinyou.jpg"/>
		</div>
		<div class="newbg">
			<div class="wrapper">
				<div class="newintro">
					<ul class="playgames clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>拳皇命运</p>
								<span>正版拳皇格斗手游</span>									
								<p>已有234.3万人预约</p>									
							</div>
							<button class="downloadbtn">预  约</button>
						</li>
						<li class="clear">  					
							<div class="circle">
								<p>圈子</p>
								<span>三测玩家给点建议，希望能重视</span>									
							</div>
							<div style="float: right;"><img src="../assets/wz.jpg" class="wz"/></div>
						</li>	
					</ul>
				</div>			
			</div>
		</div>
		
		<div class="newbg">
			<div class="wrapper">
				<ul class="playgames clear">
					<li class="clear">
						<div><img src="../assets/wz.jpg" class="wz"/></div>
						<div class="heroes">
							<p>FIFA足球世界</p>
							<span>首款FIFA实时PVP足球竞技手游</span>									
							<p>已有122.3万人预约</p>									
						</div>
						<button class="downloadbtn">预  约</button>
					</li>
					<li class="clear">
						<div><img src="../assets/wz.jpg" class="wz"/></div>
						<div class="heroes">
							<p>我的王朝</p>
							<span>首款FIFA实时PVP足球竞技手游</span>									
							<p>已有122.3万人预约</p>									
						</div>
						<button class="downloadbtn">进  入</button>
					</li>
					<li class="clear">
						<div><img src="../assets/wz.jpg" class="wz"/></div>
						<div class="heroes">
							<p>绝地求生</p>
							<span>首款FIFA实时PVP足球竞技手游</span>									
							<p>已有122.3万人预约</p>									
						</div>
						<button class="downloadbtn">预  约</button>
					</li>
					<li class="clear">
						<div><img src="../assets/wz.jpg" class="wz"/></div>
						<div class="heroes">
							<p>我的王朝</p>
							<span>首款FIFA实时PVP足球竞技手游</span>									
							<p>已有122.3万人预约</p>									
						</div>
						<button class="downloadbtn">进  入</button>
					</li>
					<li class="clear">
						<div><img src="../assets/wz.jpg" class="wz"/></div>
						<div class="heroes">
							<p>我的王朝</p>
							<span>首款FIFA实时PVP足球竞技手游</span>									
							<p>已有122.3万人预约</p>									
						</div>
						<button class="downloadbtn">进  入</button>
					</li>
				</ul>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'newde',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="">
	#newde{
		height: 100%;
		background: #efeff4;
	}
	.newbg{
		background: #ffffff;
	}
	.toppic img{
		width: 100%;
	}
	.toppic{
		margin-bottom: 20px;
	}	
	.newintro{
		margin-bottom: 20px;
	}
	
	.playgames li{
		padding: 10px 0;
		position: relative;
		border-bottom: 1px solid #ccc; 
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
		width: 20px;
		margin-top: 10px;
	}
	.heroes{
		width: 55%;
	}
	.heroes span{
		color: #666;
		font-size: 12px;
	}
	
	/*下载*/
	.downloadbtn{
		border: none;
		background: #ccc;
		width: 66px;
		height: 36px;
		border-radius: 4px;
		position: absolute;
		top: 50%;
		right: 0;
		margin-top: -18px;
	}
	
	/*圈子*/
	.circle p{
		color: #21b100;
		margin-bottom: 10px;
	}
</style>