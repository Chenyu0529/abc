<template>
	<div id="games">
		<div class="bline">
			<div class="wrapper">
				<mt-search
				  v-model="value"
				  cancel-text="取消"
				  placeholder="大家都在搜小游戏">
				</mt-search>
				
				<div class="navgames">   
					<ul class="clear ulh menuconts">
	               		<router-link tag="li" to="/newde">
	               			<i class="iconfont icon-ai64"></i><span>新游</span>
	               		</router-link>
	               		<router-link tag="li" :to="{name:'list',query:{}}">
	               			<i class="iconfont icon-zhaoshangdailifenlei"></i><span>分类</span>
	               		</router-link>	
			         	<router-link tag="li" to="/newde">
			         		<i class="iconfont icon-paixing"></i><span>排行</span>
			         	</router-link>	
			            <router-link tag="li" to="/gift">
			            	<i class="iconfont icon-libao"></i><span>礼包</span>
			            </router-link>	  
		            </ul>
		            <h3>好友在玩小游戏</h3>
	    			<ul class="playing clear">
	    				<li><img src="../assets/tiao.jpg" class="tiao"/><span>跳一跳</span></li>
						<li><img src="../assets/tiao.jpg" class="tiao"/><span>腾讯桌球</span></li>
						<li><img src="../assets/tiao.jpg" class="tiao"/><span>全民大乐斗</span></li>
	    			</ul>
	    			<div class="seemore"><a href="javascript:;">查看更多></a></div>
		            
		            
				</div>				
							
			</div>
			<div style="height: 4px;background: #ccc;"></div>
			
			<div class="wrapper">				
				<div class="midcon">
    				<div class="friendhot">
    					<h3>好友热玩榜</h3>
    					<ul class="hotul clear">
    						<router-link to="/gamesde" tag="li" class="clear">
    							<div>1</div>
		    					<div><img src="../assets/wz.jpg" class="wz"/></div>
								<div class="playname">
									<p>王者荣耀</p>
									<span>MOBA | 最强王者 |5v5</span>
									<p class="headpic"><img src="../assets/tiao.jpg"/><img src="../assets/tiao.jpg"/>
									<img src="../assets/tiao.jpg"/>
									<span class="friends">24个好友在玩</span></p>
								</div>
								<button class="downloadbtn">下载</button>
    						</router-link>
							
							<li class="clear">
									<div>2</div>
			    					<div><img src="../assets/wz.jpg" class="wz"/></div>
									<div class="playname">
										<p>王者荣耀</p>
										<span>MOBA | 最强王者 |5v5</span>
										<p class="headpic"><img src="../assets/tiao.jpg"/><img src="../assets/tiao.jpg"/>
										<img src="../assets/tiao.jpg"/>
										<span class="friends">24个好友在玩</span></p>
									</div>
									<button class="downloadbtn">下载</button>
								</li>
								
								<li class="clear">
									<div>3</div>
			    					<div><img src="../assets/wz.jpg" class="wz"/></div>
									<div class="playname">
										<p>王者荣耀</p>
										<span>MOBA | 最强王者 |5v5</span>
										<p class="headpic"><img src="../assets/tiao.jpg"/><img src="../assets/tiao.jpg"/>
										<img src="../assets/tiao.jpg"/>
										<span class="friends">24个好友在玩</span></p>
									</div>
									<button class="downloadbtn">下载</button>
								</li>
							
						</ul>
						<div class="complete"><a href="javascript:;">完整榜单></a></div>
					</div>
				</div>
				
			</div>
			<hr />
			<div class="wrapper">
				<div class="todayrec">
					<h3>今日推荐</h3>	   					
					<p class="headpic"><img src="../assets/tiao.jpg" style="margin-top: 0px;"/></p>
					<span>1个好友在玩《绝地求生 全军出击》</span>
					<img src="../assets/wz.jpg" class="gamesaudio"/>
					<div class="introdown" style="position: relative;">
						<p class="headpic"><img src="../assets/wz.jpg"/></p>
						<span>绝地求生 全军出...</span>
						<button class="downloadbtn smalldown">下载</button>
					</div>
				</div>
				
			</div>
			<hr />
			<div class="wrapper">
				<div class="friendhot">
				<h3>游戏畅销榜</h3>
				<ul class="hotul">
					<li class="clear">
						<div>1</div>
    					<div><img src="../assets/wz.jpg" class="wz"/></div>
						<div class="playname">
							<p>皇室战争</p>
							<span>策略 | 卡牌 |塔防 | MOBA</span>										
						</div>
						<button class="downloadbtn">下载</button>
					</li>
					
					<li class="clear">
						<div>2</div>
    					<div><img src="../assets/wz.jpg" class="wz"/></div>
						<div class="playname">
							<p>绝地求生:刺激战场</p>
							<span>正版还原 | 大吉大利 |组队开黑</span>										
						</div>
						<button class="downloadbtn">下载</button>
					</li>
					
					<li class="clear">
						<div>3</div>
    					<div><img src="../assets/wz.jpg" class="wz"/></div>
						<div class="playname">
							<p>绝地求生 全军出击</p>
							<span>正版还原 | 大吉大利 |组队开黑</span>										
						</div>
						<button class="downloadbtn">下载</button>
					</li>
				</ul>
				<div class="complete"><a href="javascript:;">完整榜单></a></div>
			</div>
			</div>
			<hr />
			
			<div class="wrapper">
				<div class="todayrec foryou">
					<h4>为你推荐</h4>	
					<h3>梦幻沙滩假日泳装</h3>
					<img src="../assets/wz.jpg" class="gamesaudio"/>
					<div class="introdown" style="position: relative;">
    					<p class="headpic"><img src="../assets/wz.jpg"/></p>
    					<span>天天爱消除</span>
    					<button class="downloadbtn smalldown xiaochu">下载</button>
					</div>
				</div>
			</div>
			
			<div class="wrapper">
				<div class="friendhot">
					<h3>新游榜</h3>
					<ul class="hotul">
						<li class="clear">
							<div>1</div>
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="playname">
								<p>拳皇命运</p>
								<span>策略 | 卡牌 |塔防 | MOBA</span>										
							</div>
							<button class="downloadbtn">下载</button>
						</li>
						
						<li class="clear">
							<div>2</div>
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="playname">
								<p>绝地求生:刺激战场</p>
								<span>正版还原 | 大吉大利 |组队开黑</span>										
							</div>
							<button class="downloadbtn">下载</button>
						</li>
						
						<li class="clear">
							<div>3</div>
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="playname">
								<p>绝地求生 全军出击</p>
								<span>正版还原 | 大吉大利 |组队开黑</span>										
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div class="complete"><a href="javascript:;">完整榜单></a></div>
				</div>
				
			</div>
			<hr />
			<div class="wrapper">
				<h3>热门分类</h3>
				<mt-cell title="休闲" is-link>
				  <img slot="icon" src="../assets/tiao.jpg" width="24" height="24">
				   <span style="color: #999">24款</span>
				</mt-cell>
				<mt-cell title="棋牌" is-link>
				  <img slot="icon" src="../assets/tiao.jpg" width="24" height="24">
				   <span style="color: #999">20款</span>
				</mt-cell>
				<mt-cell title="角色" is-link>
				  <img slot="icon" src="../assets/tiao.jpg" width="24" height="24">
				   <span style="color: #999">55款</span>
				</mt-cell>
				<mt-cell title="竞技" is-link>
				  <img slot="icon" src="../assets/tiao.jpg" width="24" height="24">
				   <span style="color: #999">17款</span>
				</mt-cell>
				
				<div class="complete"><a href="javascript:;">全部分类></a></div>
			</div>
			<hr />
			<div class="wrapper">
				<h3>英雄公平对战卡牌MOBA</h3>
				<div class="duizhan">
					<ul class="duizhanul clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>英雄战歌</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div><img src="../assets/wz.jpg" alt="" style="height: 150px;width: 100%;margin-bottom: 10px;"/></div>
				</div>
			</div>
			<hr />
			
			<div class="wrapper">
				<h3>大吉大利</h3>
				<div class="duizhan good">
					<ul class="duizhanul clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div class="complete"><a href="javascript:;">查看全部4款游戏></a></div>
				</div>
			</div>
			<hr />
			
			<div class="wrapper">
				<h3>经典传承大作</h3>
				<div class="duizhan good">
					<ul class="duizhanul clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>魔力宝贝</p>
								<span>回合 | 日系 | 清新 | 探索 | 奇遇</span>									
							</div>
							<button class="downloadbtn">预约</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div class="complete"><a href="javascript:;">查看全部4款游戏></a></div>
				</div>
			</div>
			<hr />
			
			<div class="wrapper">
				<h3>玩不一样的球!创新休闲竞技手游</h3>
				<div class="duizhan">
					<ul class="duizhanul clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>欢乐球吃球</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div><img src="../assets/wz.jpg" alt="" style="height: 150px;width: 100%;margin-bottom: 10px;"/></div>
				</div>
			</div>
			<hr />
			
			<div class="wrapper">
				<h3>开黑开火开战</h3>
				<div class="duizhan good">
					<ul class="duizhanul clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>魔力宝贝</p>
								<span>回合 | 日系 | 清新 | 探索 | 奇遇</span>									
							</div>
							<button class="downloadbtn">预约</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div class="complete"><a href="javascript:;">查看全部8款游戏></a></div>
				</div>
			</div>
			<hr />
			
			<div class="wrapper">
				<h3>战争策略</h3>
				<div class="duizhan good">
					<ul class="duizhanul clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>乱世王者</p>
								<span>回合 | 日系 | 清新 | 探索 | 奇遇</span>									
							</div>
							<button class="downloadbtn">预约</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div class="complete"><a href="javascript:;">查看全部4款游戏></a></div>
				</div>
			</div>
			<hr />
			
			<div class="wrapper">
				<h3>风靡全球的休闲策略手游</h3>
				<div class="duizhan">
					<ul class="duizhanul clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>部落冲突</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div><img src="../assets/wz.jpg" alt="" style="height: 150px;width: 100%;margin-bottom: 10px;"/></div>
				</div>
			</div>
			<hr />
			
			
			<div class="wrapper">
				<h3>好玩停不下来</h3>
				<div class="duizhan good">
					<ul class="duizhanul clear">
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>火影忍者</p>
								<span>回合 | 日系 | 清新 | 探索 | 奇遇</span>									
							</div>
							<button class="downloadbtn">预约</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
						<li class="clear">
	    					<div><img src="../assets/wz.jpg" class="wz"/></div>
							<div class="heroes">
								<p>绝地求生</p>
								<span>策略 | 集换卡牌 | 海量英雄</span>									
							</div>
							<button class="downloadbtn">下载</button>
						</li>
					</ul>
					<div class="complete"><a href="javascript:;">查看全部4款游戏></a></div>
				</div>
			</div>
			<hr />
		</div>
		
		
		
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'games',
		data() {
			return {
				value:''
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



<style>
	.mint-search{
		height: 100%;
	}
	.mint-searchbar{
		padding: 0px;
		border: 1px solid #ccc;
		background: #fff;
	}
	.mint-searchbar-inner {
		height: 14px;
		border-radius: 5px;
	}
	.mint-searchbar-core{
		text-align: center;
	}
	.mint-searchbar-cancel{
		margin-right: 10px;
	}
	/*搜索图标*/
	.mint-searchbar-inner .mintui-search {
	    position: absolute;
	    left: 29%;
	    top: 22%;
	}
	
	/*菜单*/
	.navgames{
		width: 100%;
		margin: 15px 0;
	}
	.menuconts li{
		width: 24%;
		text-align: center;
		border-right: 1px solid #CCCCCC;
	}
	.menuconts li:nth-last-of-type(1){
		border: none;
	}
	.navgames li{
		float: left;
	}
	.navgames li i{
		margin-right: 5px;
	}
	.navgames .line{
		width: 2px;
		height: 15px;
		background: #ccc;
		margin: 3px 20px 0 0;
	}
	
	/*好友玩游戏*/
	#games h3{
		font-size: 14px;
		margin: 20px 0;
	}
	.playing li{
		width: 33%;
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.tiao{
		width: 50px;
	}
	
	.seemore{
		margin: 20px;
	}
	
	/*好友热玩榜*/
	.hotul li{
		margin: 10px 0;
	}
	.hotul li img{
		width: 50px;
	}
	.hotul li div{
		float: left;
		margin-right: 15px;
	}
	.hotul .headpic img{
		width: 20px;
		margin-top: 10px;
	}
	
	.playname{
		width: 49%;
	}
	.playname span{
		color: #666;
		font-size: 12px;
	}
	.hotul li div:nth-of-type(1){
		font-size: 22px;
		margin-right: 10px;
		margin-top: 10px;	
	}
	.hotul li:nth-of-type(1) div:nth-of-type(1){
		color: yellow;
	}
	.hotul li:nth-of-type(2) div:nth-of-type(1){
		color: #ccc;
	}
	.hotul li:nth-of-type(3) div:nth-of-type(1){
		color: orange;
	}
	.friends{
		display: inline-block;
		margin-top: -10px;
	}
	.hotul li,.duizhanul li{
		position: relative;
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
	
	/*完整榜单*/
	.complete{
		margin: 10px;
	}
	/*今日推荐*/
	.todayrec .headpic{
		width: 30px;
		float: left;
	}
	.todayrec .headpic img{
		width: 20px;
		/*margin-top: 15px;*/
	}
	
	/*游戏视频*/
	.gamesaudio{
		width: 100%;
		height: 150px;
	}
	.introdown{
		margin: 10px 0;
	}
	
	/*为你推荐*/
	.foryou h4{
		margin-top: 20px;
	}
	#games .foryou h3{
		margin: 10px 0;
	}
	
	/*.foryou .xiaochu{
		left: 42%;
	}*/
	
	/*英雄对战*/
	.duizhanul img{
		width: 50px;
	}
	.duizhanul li div{
		float: left;
		margin-left: 15px;
	}
	.duizhanul .headpic img{
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
	/*大吉大利*/
	.good ul li{
		margin: 20px 0;
	}
</style>