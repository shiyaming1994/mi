<template>
    <div class="home">
      <header-name></header-name>
      <!-- 轮播图 -->
      <mt-swipe :auto="4000">
          <mt-swipe-item>
            <a href="javascript:;">
              <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="javascript:;">
              <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="javascript:;">
              <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
            </a>
          </mt-swipe-item>
      </mt-swipe>
      <!-- 精选测试 -->
        <div class="Selected">
            <div class="Selected-title clearfix">
                <div class="Selected-title-left left">精选测试</div>
                <div class="Selected-title-right right"><a href="javascript:;">更多</a></div>
            </div>
            <a href="javascript:;">
                <div class="Selected-list clearfix">
                    <div class="Selected-list-box">
                        <div class="Selected-list-left left">
                            <div class="Selected-list-left-title">title</div>
                            <div class="Selected-list-left-info">描述</div>
                            <div class="Selected-list-left-money clearfix">
                                <div class="Selected-list-left-money-new left">￥19.9</div>
                            </div>
                        </div>
                        <div class="Selected-list-right right">
                            <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
                        </div>
                    </div>
                </div>
            </a>
            <a href="javascript:;">
                <div class="Selected-list clearfix">
                    <div class="Selected-list-box">
                        <div class="Selected-list-left left">
                            <div class="Selected-list-left-title">title</div>
                            <div class="Selected-list-left-info">描述</div>
                            <div class="Selected-list-left-money clearfix">
                                <div class="Selected-list-left-money-new left">￥19.9</div>
                            </div>
                        </div>
                        <div class="Selected-list-right right">
                            <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <!-- 底部导航 -->
      <footer-nav></footer-nav>
    </div>
</template>

<script>
import footerNav from '../nav/footerNav'
import headerName from '../header/headerName'
export default {
  components:{
    footerNav,
    headerName
  }
}
</script>

<style scoped>
.home {
    position: fixed;
    height: 100%;
    background-color: #f6f6f6;
}
.mint-swipe {
  height: 4rem;
}
img {
    display: block;
    width: 100%;
    height: 100%;
}
.Selected {
    margin: .3rem auto;
    background-color: #fff;
}
.Selected-list-box {
    padding: 0 .3rem;
}
.Selected-title {
    height: 1rem;
    line-height: 1rem;
    padding: 0 .3rem;
    border-bottom: 1px solid #ccc;
}
.Selected-title-left {
    font-size: .4rem;
}
.Selected-title-right {
    font-size: .3rem;
}
.Selected-list {
    position: relative;
    padding: .2rem 0;
    height: 1.7rem;
    border-bottom: 1px solid #ccc;
}
.Selected-list-left {
    width: 5rem;
}
.Selected-list-left-title {
    font-size: .35rem;
    line-height: .4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.Selected-list-left-info {
    font-size: .25rem;
    line-height: .3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #999;
    margin-top: .1rem;
}
.Selected-list-left-money {
    font-size: .25rem;
    position: absolute;
    bottom: .2rem;
    width: 5rem;
    color: #999;
    line-height: .3rem;
}
.Selected-list-right {
    width: 1.7rem;
    height: 1.7rem;
}
</style>
