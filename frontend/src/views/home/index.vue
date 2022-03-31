<template>
    <div class="home">
        <div class="home-left">
            <div class="banner">
                <a-carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </a-carousel>
            </div>
            <div class="quick-nav">
                😷😷😷待开发ing
            </div>
        </div>
        <div class="home-right"></div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="less" scoped>
.home {
    width: 1200px;
    margin: 170px auto 0;
    height: 100%;
    display: flex;
    // margin-top: 170px;
    .home-left {
        width: 840px;
        height: 100%;
        // background-color: rgb(235, 180, 108);
        margin-right: 20px;
        .banner {
            width: 100%;
            height: 210px;
            border-radius: 10px;
            overflow: hidden;
            /deep/ .ant-carousel {
                .slick-slide {
                    text-align: center;
                    height: 210px;
                    line-height: 210px;
                    // background: #364d79;
                    overflow: hidden;
                }
                .slick-slide h3 {
                    color: #fff;
                }
            }
        }
    }
    .home-right {
        width: 340px;
        height: 100%;
        // background-color: rgb(101, 27, 161);
    }
}
</style>