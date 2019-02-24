<template>
  <div>
  	<div class="swiper">
    	<swiper :options="swiperOption" v-if="rotationChart.length>0">
    	  <swiper-slide v-for="(item,index) in rotationChart" :key="item.index">
    	  	<img :src="item.img" alt="">
    	  </swiper-slide>
    	</swiper>
    	<div class="swiper-pagination"></div>
    </div>
  </div>
</template>


<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data() {
      return {
        swiperOption: {
        	loop: true,
      		autoplay: {
  			  delay: 2500, //自动切换的时间间隔，单位ms
  			  disableOnInteraction: false,
  			  waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
  			}
      	},
      	rotationChart:[]
      }
  	},
	created(){
		this.getRotation()
	},
	methods:{
		getRotation(){
            this.$http.get("../../../static/rotationChart.json")
                .then(res=>{
                    this.rotationChart = res.data
                }).catch(function(error){
                    console.log("error init."+error)
                })
        }
	},
  	components: {
    swiper,
    swiperSlide
  }
}
</script>
<style scoped>
.swiper img {
  display: block;
	width: 100%;
}

</style>