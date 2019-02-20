<template>
<div>
    <div class="home-header clearfix">
        <div class="home-header-left">
            <div class="home-header-portrait">
                <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoTgOiaRXSicahAyLiaOaIN0jRMbibZjN0vOqzyan5AebGThib52lfNMLpZvJYVEHNCCic5WGp9Vp4YBgkA/132" alt="">
            </div>
            <div class="home-header-name">你好，NAME</div>
        </div>
    </div>
</div>

</template>

<script>
  
</script>

<style scoped>
.home-header {
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
}
.home-header-left {
    float: left;
    display: flex;
    align-items: center;
    margin-left: .3rem;
}
.home-header-portrait {
    float: left;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
}
.home-header-portrait img {
    width: 100%;
    height: 100%;
    display: block;
}
.home-header-name {
    float: left;
    font-size: .4rem;
    margin-left: .5rem;
}
</style>
