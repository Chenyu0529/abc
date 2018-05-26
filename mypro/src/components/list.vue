<template>
	<div id="list">
		<div class="changxiao" >
			<ul class="playgames clear">
				<li class="clear">
					<div><img src="../assets/wz.jpg" class="wz"/></div>
					<div class="num num1">1</div>
					<div class="heroes">
						<p>王者荣耀</p>
						<span>MOBA | 最强王者</span>									
					</div>
					<button class="downloadbtn">下  载</button>
				</li>
				<li class="clear">
					<div><img src="../assets/wz.jpg" class="wz"/></div>
					<div class="num num2">2</div>
					<div class="heroes">
						<p>绝地求生</p>
						<span>MOBA | 最强王者</span>									
					</div>
					<button class="downloadbtn">下  载</button>
				</li>
				<li class="clear">
					<div><img src="../assets/wz.jpg" class="wz"/></div>
					<div class="num num3">3</div>
					<div class="heroes">
						<p>QQ飞车</p>
						<span>MOBA | 最强王者</span>									
					</div>
					<button class="downloadbtn">下  载</button>
				</li>
				<li class="clear">
					<div><img src="../assets/wz.jpg" class="wz"/></div>
					<div class="num num4">4</div>
					<div class="heroes">
						<p>QQ飞车</p>
						<span>MOBA | 最强王者</span>									
					</div>
					<button class="downloadbtn">下  载</button>
				</li>
				<li class="clear">
					<div><img src="../assets/wz.jpg" class="wz"/></div>
					<div class="num num5">5</div>
					<div class="heroes">
						<p>QQ飞车</p>
						<span>MOBA | 最强王者</span>									
					</div>
					<button class="downloadbtn">下  载</button>
				</li>
			</ul>
		</div>
		
		<!--好友榜-->
		<div class="goodsfriends">
				<ul class="playgames clear">
					<li class="clear">
						<div><img src="../assets/cj.jpg" class="wz"/></div>
						<div class="num num1">1</div>
						<div class="heroes">
							<p>绝地求生</p>
							<span>MOBA | 最强王者</span>									
						</div>
						<button class="downloadbtn">下  载</button>
					</li>
					<li class="clear">
						<div><img src="../assets/cj.jpg" class="wz"/></div>
						<div class="num num2">2</div>
						<div class="heroes">
							<p>绝地求生</p>
							<span>MOBA | 最强王者</span>									
						</div>
						<button class="downloadbtn">下  载</button>
					</li>
					<li class="clear">
						<div><img src="../assets/cj.jpg" class="wz"/></div>
						<div class="num num3">3</div>
						<div class="heroes">
							<p>QQ飞车</p>
							<span>MOBA | 最强王者</span>									
						</div>
						<button class="downloadbtn">下  载</button>
					</li>
					<li class="clear">
						<div><img src="../assets/cj.jpg" class="wz"/></div>
						<div class="num num4">4</div>
						<div class="heroes">
							<p>QQ飞车</p>
							<span>MOBA | 最强王者</span>									
						</div>
						<button class="downloadbtn">下  载</button>
					</li>
					<li class="clear">
						<div><img src="../assets/cj.jpg" class="wz"/></div>
						<div class="num num5">5</div>
						<div class="heroes">
							<p>QQ飞车</p>
							<span>MOBA | 最强王者</span>									
						</div>
						<button class="downloadbtn">下  载</button>
					</li>
				</ul>
			</div>
		
		
	</div>
</template>

<script>
	export default{
		name:'list',
		data(){
			return{
				arr1:[]
			}
		}/*,
		watch:{
			'$route':function(n){
				console.log(n.query.item)
				var that=this;
				 axios({
	                method:'get',
	                url:'http://localhost:3000/goods',
	               
	                params:{
	                    dd:{n.query.item}
	                }
	               
		            }).then(function(data){
		                
		               that.arr=data.data
		            })
			}
		}*/
	}
</script>

<style scoped="">
	
	/*右边*/
	.playgames li{
		padding: 10px 0;
		position: relative;
	}
	.playgames img{
		width: 60px;
		margin-right: 5px;
		vertical-align: middle;
	}
	.playgames li div{
		float: left;
		margin-left: 6px;
		position: relative;
	}
	.playgames .headpic img{
		width: 20px;
		margin-top: 10px;
	}
	
	.heroes p{
		margin-bottom: 5px;
	}
	.heroes span{
		color: #666;
		font-size: 12px;
	}
	
	/*下载*/
	.downloadbtn{
		border: none;
		background: #f7f7f7;
		width: 66px;
		height: 36px;
		border-radius: 6px;
		position: absolute;
		top: 45%;
		right: 5%;
		margin-top: -18px;
		border: 1px solid #ebebea; 
	}
	
	.num{		
		font-size: 18px;
		font-weight: bold;
		margin-right: 5px;
	}
	.num1{
		color: #eed157;
	}
	.num2{
		color: #d4b897;
	}
	.num3{
		color: #bdc5cb;
	}
	.num4{
		color: #959595;
	}
	.num5{
		color: #959595;
	}
</style>