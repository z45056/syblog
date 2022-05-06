<template>
    <div class="home">
        <div class="home-left">
            <div class="home-item">
                <div class="banner">
                    <a-carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </a-carousel>
                </div>
            </div>
            <!-- <div class="home-item">
                <div class="quick-nav">
                    <a-button @click="entryDetail">进入详情页面</a-button>😷😷😷待开发ing
                </div>
            </div> -->
            <div class="home-item">
                <tag-list></tag-list>
            </div>
        </div>
        <div class="home-right">
            <div class="announcement">
                <div class="announcement-content">
                    <a-input v-model="username" placeholder="Basic usage" />
                    <a-input-password v-model="password" placeholder="input password" />
                    <a-button @click="submit">登录</a-button>
                </div>
            </div>
            <div class="rank">
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
import tagList from './tagList.vue'
export default {
    name: 'Home',
    components: {
        tagList
    },
    data () {
        return {
            rankList: [
                { name: '这是第一个', id: 1}
            ],
            username: 'admin',
            password: '123456'
        }
    },
    methods: {
        submit () {
            const params = {
                username: this.username,
                password: this.password
            }
            this.$store.dispatch('login', params).then(res => {
                console.log(res)
            })
            // console.log(params, this.$store)
        },
        entryDetail () {
            this.$router.push({
                name: 'detail',
                query: {
                    from: 'home'
                }
            })
        }
    }
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
        margin-right: 20px;
        .home-item {
            width: 100%;
            margin-bottom: 20px;
            box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 10%);
            background-color: #fff;
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
                        color: rgb(209, 57, 57);
                    }
                }
            }
        }
    }
    .home-right {
        width: 340px;
        height: 100%;
        background-color: #fff;
        .announcement {
            width: 100%;
            // width: 340px;
            background: url('../../asset/img/gonggaobg.png') no-repeat;
            background-size: 100% 100%;
            height: 250px;
            padding: 20px;
            .announcement-content {
                width: 100%;
                height: 100%;
                background-color: #fff;
            }
        }
    }
}
</style>
