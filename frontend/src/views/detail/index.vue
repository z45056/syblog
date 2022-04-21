<template>
    <div class="detail">
        <div class="left"></div>
        <div class="right">
            <div class="author"></div>
            <div class="comment"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    data () {
        return {

        }
    }
}
</script>

<style lang='less' scoped>
.detail {
    width: 1200px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    .left {
        background-color: #fff;
        width: 880px;
        // min-height: 800px;
    }
    .right {
        width: 300px;
        min-height: 800px;
        .author{
            background-color: #fff;
            width: 100%;
            height: 250px;
        }
        .comment {
            background-color: #fff;
            width: 100%;
            margin-top: 20px;
            min-height: 600px;
        }
    }
}
</style>