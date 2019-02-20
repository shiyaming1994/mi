<template>
    <div class="classification">
        <header-name></header-name>
        <div class="category-info">
            <div class="category-info-left">
                <ul>
                    <li>list-1<input type="hidden" value="1"></li>
                    <li>list-2<input type="hidden" value="1"></li>
                    <li>list-3<input type="hidden" value="1"></li>
                    <li>list-4<input type="hidden" value="1"></li>
                    <li>list-5<input type="hidden" value="1"></li>
                </ul>
            </div>
            <div class="category-info-right">
                <a href="javascript:;">
                    <div class="category-list clearfix">
                        <div class="category-list-left left">
                            <div class="category-list-left-title">name</div>
                            <div class="category-list-left-info">描述</div>
                            <div class="category-list-left-money clearfix">
                                <div class="category-list-left-money-new left">￥19.9</div>
                            </div>
                        </div>
                        <div class="category-list-right right">
                            <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
                        </div>
                    </div>
                </a>
                <a href="javascript:;">
                    <div class="category-list clearfix">
                        <div class="category-list-left left">
                            <div class="category-list-left-title">name</div>
                            <div class="category-list-left-info">描述</div>
                            <div class="category-list-left-money clearfix">
                                <div class="category-list-left-money-new left">￥19.9</div>
                            </div>
                        </div>
                        <div class="category-list-right right">
                            <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
                        </div>
                    </div>
                </a>
            </div>
        </div>
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
.category-info-left {
    width: 2rem;
    position: fixed;
    top: 1.5rem;
    bottom: 1.5rem;
    left: 0;
    border-right: 1px solid #efefef;
    overflow: hidden;
}
.category-info-right {
    position: fixed;
    top: 1.5rem;
    left: 2rem;
    right: 0;
    bottom: 1.5rem;
    overflow: hidden;
    overflow-y: auto;
    background-color: #f6f6f6;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
}
.category-info-left ul {
    z-index: 90;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -.1rem;
    overflow-y: auto;
}
.category-info-left li {
    height: 1rem;
    font-size: .3rem;
    line-height: 1rem;
    text-align: center;
    border-top: 1px solid #ccc;
}
.category-list {
    position: relative;
    padding: .2rem;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
}
.category-list-left {
    width: 3.3rem;
    padding-right: .2rem;
}
.category-list-left-title {
    font-size: .3rem;
    overflow: hidden;
    color: #000;
    line-height: .35rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.category-list-left-info {
    font-size: .2rem;
    color: #999;
    margin-top: .1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.category-list-left-money {
    font-size: .2rem;
    position: absolute;
    bottom: .2rem;
    width: 3.3rem;
    color: #999;
    line-height: .3rem;
    padding-right: .2rem;
}
.category-list-right {
    width: 1.5rem;
    height: 1.5rem;
}
.category-list-right img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
