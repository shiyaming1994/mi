<template>
    <div class="order">
        <div class="order-top">
            <div class="header clearfix">
                <a href="javascript:;">
                    <i class="iconfont icon-fanhui left"></i>
                </a>
                <div class="header-tit">我的订单</div>
            </div>
            <div class="order-Statistics">
                <ul class="clearfix">
                    <li class="order-class-now">已作答</li>
                    <li>未作答</li>
                </ul>
            </div>
        </div>
        <div class="order-list-info">
            <div class="order-list-info-top">15485414</div>
            <div class="order-list-info-center clearfix">
                <div class="order-list-info-center-img left">
                    <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
                </div>
                <div class="order-list-right right">
                    <div class="order-list-right-title">name</div>
                    <div class="order-list-right-info">描述</div>
                    <div class="order-list-right-money">￥19.9</div>
                </div>
            </div>
            <div class="order-list-info-footer clearfix">
                <div class="order-list-info-footer-time left">答卷name</div>
                <div class="order-list-info-footer-OK right">已作答</div>
                <div class="order-list-info-footer-num clearfix">
                    <div class="order-list-info-footer-num-left left">得分</div>
                    <div class="order-list-info-footer-num-right right">50</div>
                </div>
                <div class="order-list-info-footer-evaluate clearfix">
                    <div class="order-list-info-footer-evaluate-left left">测试结果</div>
                    <div class="order-list-info-footer-evaluate-right right">测试结果内容测试结果内容测试结果内容测试结果内容测试结果内容</div>
                </div>
            </div>
        </div>
        <div class="order-list-info">
            <div class="order-list-info-top">15485414</div>
            <div class="order-list-info-center clearfix">
                <div class="order-list-info-center-img left">
                    <img src="https://imgco.xinli001.com/ceping/lingxi/scalePool/161f3ca64f4a4b2b9b4670f54a322c6a.png?x-oss-process=image/resize,p_80/quality,Q_80" alt="">
                </div>
                <div class="order-list-right right">
                    <div class="order-list-right-title">name</div>
                    <div class="order-list-right-info">描述</div>
                    <div class="order-list-right-money">￥19.9</div>
                </div>
            </div>
            <div class="order-list-info-footer clearfix">
                <div class="order-list-info-footer-NO right">去作答</div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.order {
    padding: 2.1rem 0 .5rem;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
}
.order-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
}
.header {
    height: 1.3rem;
    line-height: 1.3rem;
    text-align: center;
    font-size: .35rem;
    background-color: #85C8FF;
    color: #fff;
    padding: 0 .2rem;
}
.icon-fanhui {
    position: absolute;
    left: .2rem;
    color: #fff;
}
.order-Statistics li {
    float: left;
    width: 50%;
    height: .8rem;
    line-height: .8rem;
    font-size: .3rem;
    text-align: center;
    background-color: #f6f6f6;
    box-sizing : border-box;
}
.order-list {
    background-color: #f6f6f6;
}
.order-list-info {
    margin: .2rem auto 0;
    background-color: #fff;
    border-radius: .2rem;
    overflow: hidden;
    padding: .2rem;
}
.order-list-info-top {
    height: .8rem;
    line-height: .8rem;
    font-size: .25rem;
    border-bottom: 1px solid #ccc;
    box-sizing : border-box;
}
.order-list-info-center {
    padding: .2rem 0;
}
.order-list-info-center-img {
    width: 1.7rem;
    height: 1.7rem;
}
.order-list-info-center-img img {
    width: 100%;
    height: 100%;
}
.order-list-right {
    width: 4.7rem;
    height: 1.7rem;
    position: relative;
}
.order-list-right-title {
    font-size: .3rem;
    line-height: .4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.order-list-right-info {
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
.order-list-right-money {
    font-size: .3rem;
    color: #ffa800;
    position: absolute;
    bottom: 0;
    left: 0;
}
.order-list-info-footer {
    font-size: .3rem;
    color: #999;
}
.order-list-info-footer-NO {
    border: 1px solid #FF4040;
    color: #FF4040;
    border-radius: .2rem;
    padding: 0 .2rem;
    box-sizing: border-box;
}
.order-class-now {
    color: #85C8FF;
    border-bottom: 2px solid #85C8FF;
}
.order-list-info-footer-num {
    margin-top: .2rem;
    font-size: .3rem;
}
.order-list-info-footer-evaluate {
    margin-top: .2rem;
    font-size: .3rem;
}
.order-list-info-footer-evaluate-left {
    width: 1.7rem;
}
.order-list-info-footer-evaluate-right {
    width: 4.7rem;
    line-height: .35rem;
}
</style>
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA+VhkSoK/asx+2CTp8rVpuVwrsesFgrJKfrCrP1M1SLcIBvGr
MAoStAL5YcML87394kvo7w/ZjGb4dlp57O1n0P69X0otiGLG6SKk/9Kr0TX/supd
WqkKUoYo/k42Wqgfr8UtQeXszo7bD6UvsBjH4OLGu6/XR//dAuZdRPK+ttFqXoaY
OIDsPexGWK8J8nrOaJIx9XMRmOwTcgT4Z1PUv0LWLdvTXr8mc5q1G+nYf86VN2/5
5tMD6N+yDSrpL8YNXF+QVw7p03Rt1nShXTpJbkOwmMp+C3wsM7Cf8Ncw6PxuE+Nb
xdWBKb1PNvJNaS7HB2YuugqpSZxvw8J7vFMGewIDAQABAoIBABwpeZpYzhnX4vOy
p6G8D6bZ3C2KJ+MtE/DfL1hFo50E3yk5nmYcnSQrudLq3qy25rfqbvKhTabn8mQb
r+2smq8mNmlOzXm7/k9SlGQ4fSNx/+FLSyP0N7A+at7eIpF2r62Aja4FtAtYYzGP
LKWtBtZFhsCoCZ6eLW4oapxg9l1bbJ8nMj2kHgG91uoqLCqScRdi2mZZwSoRb19W
ZNnSPotlvh7iEYL1X7/FZjhzOmWfCXKmr/pXyXUgVdQ8MoKM0MF0qCZ0E3Aoxj3K
J+A69E/3bw7uRhekgSU8QdXCKYGAPU1gEe/Og/J7HFp8O9GHxgY6as7MwkeG9UXu
a3Y0jnECgYEA/xWlhB8Ee0ZpYuy/SGyVqnA9VIPRoP3km1VkMmzryG099BkBXPUg
qYsFO16CulOiz1ON7Lmxg5EJZSaSoGKh8/tma/EnMacl9mipdC3hlgwdObNXRhRZ
rqxCJHn0U2imWcnTXeZI579B8+sSlx8FyurNAeEVhNpeua9aZ0yq67UCgYEA+j14
7cAJSNpTn0nd97oZB69tf0LdtEKtf2rMe4sSv420ChwKYlFPQ2NkFo34jdqADgu4
dU+5aBoTNOD9u1Ji/8a+Sq4cgBFSmlcpQouXWbTjDpMXUyb65ccog46K5+N3ZEOD
UpyB4ujjkVUfVqKS+Cs/SXElzQ/zU0YDLlp9Z28CgYBfF0O3iBSUnAAHZ7g7GHeG
rQa/7dAE0wEYwvFyNtaCxe6Vg4jVjW/apD+UDTxwl2MXJM/AkszQ/g1hjsqUTZCQ
MoTQ8noo8WWegQ/ChqQU2nk+nFOJhWaVThPuIyRov5db23gXBhThh5PfiR9KBL+V
EIjSDYWHHBy53du2rIb/DQKBgQDYOQ2owWpEXQIsfPMi/tZp4ZdHg0t2Wrb3hhyy
E3VbtuF+asQ+N+u5WsQ9COdgCxDjEhWMqBqYbQ9zfYVAuut3/w6mENPnhRBO9Ele
iqd4h+g5y7c3zlK1AOVs51n3DIE5TWzHkRxaKMmZ5mdxwIAll5jTqMT073dc2P4e
q2n4WQKBgQDX41k9LandSYngwOot5FZ9/6I+7aQlydjxekExjRQ3cX+ao9AG1yb8
kvnqkdyingCWBaiXHDSFPH6ULPwLLucFA7YTdwsh7dheckPCZNw7CZ9tvrQ72tbN
Kr+gYed+o+MkdShAvPAA+8LQvwAme9B0nt4T2iDc7xMKhpklL31+EQ==
-----END RSA PRIVATE KEY-----
