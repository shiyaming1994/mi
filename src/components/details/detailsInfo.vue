<template>
	<div>
		<div class="img">
			<img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
		</div>
		<div class="content">
			<div class="content-title">title</div>
			<div class="content-info">info</div>
			<div class="content-price">￥19.9</div>
		</div>
		<mt-button type="primary" size="large" @click="buy(1)">立即购买</mt-button>
		<div class="goods-img clearfix">
			<vue-preview :slides="goods_img" @close="handleClose"></vue-preview>	
		</div>
		<textarea placeholder="评论内容" id="textarea" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="publish()">发表评论</mt-button>
		<div class="comment-list">
			<div class="comment-info" v-for="(item,index) in comment" :key = "index">
				<div class="comment-title">第{{ index + 1 }}楼&nbsp;&nbsp;用户：{{ item.name }}&nbsp;&nbsp;发表时间：{{ item.time }}</div>
				<div class="comment-content">{{ item.content }}</div>
			</div>
		</div>
		<mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
        	page: 1,
            comment:[],
            msg:'',
            goods_img:[]
        }
    },
    created(){
       this.getComment()
    },
    methods: {
    	// 加载评论
　　　　　　 getComment(){
            this.$http.get("../../../static/data.json" + "?page=" + this.page)
                .then(res=>{
                    this.comment = this.comment.concat(res.data.comment)
                    res.data.goods_img.forEach(item => {
                    	item.w = 600
                    	item.h = 500
                    	item.msrc = item.src
                    })
                    this.goods_img = res.data.goods_img
                }).catch(function(error){
                    Toast({
					  	message: '获取失败',
					  	position: 'bottom'
					});
                })
        },
        // 发表评论
        publish(){
        	if(this.msg.trim().length == 0){
        		return Toast({
				  	message: '评论不能为空',
				  	position: 'bottom'
				});
        	}
        	this.$http.post("../../../static/data.json/" + this.$route.params.id,{
        		content:this.msg.trim()
        	})
        	.then(function(){
        		Toast({
				  	message: '发表成功',
				  	position: 'bottom'
				});
        	})
        },
        // 点击加载更多
        getMore(){
        	this.page++
        	this.getComment()
        },
        handleClose (index) {

		},
		buy(id){
			this.$router.push("/buyInfo/" + id)
		}
　　　　}
}
</script>

<style scoped>
.img {
	height: 200px;
}
.img img {
	width: 100%;
	height: 100%;
}
.content {
	font-size: 15px;
	text-align: center;
	border-bottom: 1px solid #ccc;
	padding: 20px;
}
#textarea {
	display: block;
	padding: 10px;
	width: 6.5rem;
	height: 50px;
	border-radius: 5px;
	margin: .5rem auto;
}
.comment-list {
	font-size: 16px;
	margin-top: 20px;
}
.comment-title {
	background-color: #f5f5f5;
	padding: 10px;
}
.comment-content {
	padding: 10px;
	text-indent: 2em;
}

</style>