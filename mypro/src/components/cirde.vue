<template>
	<div id="cirde">
		<div class="bgcolors" style="margin-bottom: 15px;">
			<div class="wrapper toux clear">
				<div><img src="../assets/tiao.jpg" alt="" width="50px" /></div>
				<div class="nickname">
					<p>徐徐徐</p>
					<span>3天前</span>
				</div>

			</div>
			<div class="wrapper">
				<h3>S11赛季射手终究没落，S11赛季梯队统计图</h3>
				<img src="../assets/qz.jpg" class="qz" />
				<p>从这张图中可以看出，边路射手的处境是非常尴尬的从这张图中可以看出边路射手的处境是非常尴尬的 从这张图中可以看出边路射手的处境是非常尴尬的从这张图中可以看出边路射手的处境是非常尴尬的 从这张图中可以看出边路射手的处境是非常尴尬的从这张图中可以看出边路射手的处境是非常尴尬的 从这张图中可以看出边路射手的处境是非常尴尬的，从这张图中可以看出，边路射手的处境是非常尴尬的
				</p>
				<div class="reading clear">
					<div><i class="iconfont icon-quanzi" style="font-size: 26px;"></i></div>
					<div class="touxs">
						<img src="../assets/tiao.jpg" />
						<img src="../assets/tiao.jpg" />
						<img src="../assets/tiao.jpg" />
					</div>
					<div><span>等31人赞过</span></div>
					<div class="recive">
						<span>40443阅读</span>
						<span>204回复</span>
					</div>
				</div>

			</div>

		</div>

		<div class="bgcolors">
			<div class="wrapper clear">
				<div class="onlysee clear">
					<h3>全部回复</h3>
					<span>只看楼主</span>
				</div>
				<div class="zhanlou">
					<div class="huifu clear">
						<div><img src="../assets/tiao.jpg" alt="" width="50px" /></div>
						<div class="nickname">
							<p>徐徐徐(楼主)</p>
							<p>沙发</p>
						</div>
					</div>
					<div class="days clear">
						<div class="rqdz">
							<span>3天前</span>
							<div style="float: right;margin-top: -5px;">
								<i class="iconfont icon-quanzi" style="font-size: 26px;"></i>
								<i class="iconfont icon-quanzi" style="font-size: 26px;"></i>
								<i>13</i>
							</div>
						</div>

						<div class="huiconts">
							<ul class="qzxqconts">
								<li>
									<span>li同学</span>：
									<span>大佬，花木兰带惩击行吗？？</span>
									<span class="timesdate">3天前</span>
								</li>
								<li>
									<span>徐佳燕</span><span>回复</span><span class="punlunr">li同学</span>：
									<span>大佬，花木兰带惩击行吗？？</span><span class="timesdate">3天前</span>
								</li>
								<div class="morehuifu">还有11条回复</div>
							</ul>

						</div>

					</div>

				</div>

				<div class="zhanlou">
					<div class="huifu clear">
						<div><img src="../assets/tiao.jpg" alt="" width="50px" /></div>
						<div class="nickname">
							<p>徐徐徐(楼主)</p>
							<p>沙发</p>
						</div>
					</div>
					<div class="days clear">
						<div class="rqdz clear">
							<span>3天前</span>
							<div style="float: right;margin-top: -5px;">
								<i class="iconfont icon-quanzi" style="font-size: 26px;"></i>
								<i class="iconfont icon-quanzi" style="font-size: 26px;"></i>
								<i>13</i>
							</div>
						</div>

						<div class="huiconts">
							<ul class="qzxqconts">
								<li>
									<span>li同学</span>：
									<span>大佬，花木兰带惩击行吗？？</span>
									<span class="timesdate">3天前</span>
								</li>
								<li>
									<span>徐佳燕</span><span>回复</span><span class="punlunr">li同学</span>：
									<span>大佬，花木兰带惩击行吗？？</span><span class="timesdate">3天前</span>
								</li>
								<div class="morehuifu">还有11条回复</div>
							</ul>

						</div>

					</div>

				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'cirde',
		data() {
			return {

			}
		}
	}
</script>

<style scoped="">
	#cirde {
		background: #efeff4;
	}
	
	.bgcolors {
		background: #ffffff;
	}
	
	.toux div {
		float: left;
		margin: 10px;
	}
	
	.nickname {
		margin-left: 10px;
	}
	
	.nickname p {
		color: #7d8dad;
		margin-bottom: 5px;
	}
	
	.nickname p:nth-of-type(2) {
		margin-top: 10px;
	}
	
	.nickname span {
		color: #c7c7c7;
	}
	
	.qz {
		margin: 30px 0;
		width: 100%;
	}
	/*头像点赞*/
	
	.touxs {
		padding: 0 5px;
	}
	
	.touxs img {
		width: 30px;
		margin-left: -10px;
	}
	
	.reading {
		margin: 10px 0;
		margin-bottom: 15px;
	}
	
	.reading>div {
		float: left;
	}
	
	.reading .recive {
		float: right;
	}
	/*只看楼主*/
	
	.onlysee {
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #ccc;
	}
	
	.onlysee h3 {
		float: left;
	}
	
	.onlysee span {
		float: right;
	}
	
	.huifu div {
		float: left;
	}
	/*右边点赞*/
	
	.days {
		margin-left: 17%;
	}
	/*日期与点赞*/
	
	.rqdz {
		padding: 10px 0;
	}
	/*回复内容*/
	
	.huifu {
		margin-top: 5%;
	}
	
	.huiconts {
		border-top: 1px solid #CCCCCC;
	}
	
	.qzxqconts li {
		padding: 10px 0;
	}
	
	.qzxqconts li>span:nth-of-type(1) {
		color: #576b95;
	}
	/*时间*/
	
	.timesdate,
	.punlunr {
		color: #ababab;
	}
	/*更多回复*/
	
	.morehuifu {
		color: #576b95;
		margin-bottom: 10px;
	}
	
	.zhanlou{
		border-bottom: 1px solid #e1e1e1;
	}
</style>