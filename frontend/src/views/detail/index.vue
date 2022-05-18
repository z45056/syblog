<template>
    <div class="detail">
        <div class="left">
            <div class="contents">
                <h1 class="a-title">{{ formdata.title }}</h1>
                <div class="a-info">
                    <p class="a-atr">{{ formdata.info.atr }}&nbsp;&nbsp;</p>
                    <p class="a-create-time"> {{ formdata.info.a_time }}</p>
                    <div class="a-focus-on">
                        + 关注
                    </div>
                </div>
                <div class="markdown-body" v-html="formdata.content"></div>
            </div>
        </div>
        <div class="right">
            <div class="author">
                <div class="avatar-info">
                    <a-avatar :size="64" icon="user" style="margin-right: 20px" />
                    <div style="margin-right: 5px">这是博主ID</div>
                    <i class="iconfont icon-icmale" style="color: #ec95bc"></i>
                </div>
                <a-divider />
                <div class="art-info">
                    <div class="count" @click="changeSave">
                        <i class="iconfont icon-shoucang" style="color: #ec95bc"></i>
                        <span>{{ is_foucs ? '收藏量' : '已收藏' }}</span>
                        <span>0</span>
                    </div>
                    <a-divider type="vertical" />
                    <div class="count">
                        <i class="iconfont icon-icon" style="color: #ec95bc"></i>
                        <span>获赞</span>
                        <span>1</span>
                    </div>
                    <a-divider type="vertical" />
                    <div class="count">
                        <i class="iconfont icon-yueduxiao" style="color: #ec95bc"></i>
                        <span>阅读量</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div class="comment"></div>
        </div>
    </div>
</template>

<script>
import 'github-markdown-css'
export default {
    name: 'Detail',
    data () {
        return {
            is_foucs: false,
            formdata: {
                title: '说一说常见的请求头和相应头都有什么呢？',
                info: {
                    atr: 'zhsdnf',
                    a_time: '2041-06-01'
                },
                content: "dawrwar\n\n\nerqwr\n\n```js\nimport Vue from \"vue\";\nimport Router  from 'vue-router'\n\nVue.use(Router)\n```\nr\nq\nwe\nqr\n\n\nr\nqw\ne\nqr\n\nq\nwe\n\nq\nwe\n\n\n\neeeeeeeeeeeeeeeeeeeeeeeeeqwrqw\nrqweqwr\nqweqrw"
            }
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            const code = "```js\nimport './asset/css/reset.css'\nimport './asset/less/app.less'\nimport Antd from 'ant-design-vue'\nimport 'ant-design-vue/dist/antd.css'\nimport Vue from 'vue'\nimport App from './App.vue'\nimport './asset/font/iconfont.css'\nimport mavonEditor from 'mavon-editor'\nimport 'mavon-editor/dist/css/index.css'\nconst markdownIt = require('markdown-it')\nVue.prototype.$md = new markdownIt()\nimport 'github-markdown-css'\nVue.use(mavonEditor)\nVue.use(Antd)\nimport router from './router/index'\nimport store from './store'\n\nnew Vue({\n    router,\n    store,\n    render: h => h(App)\n}).$mount('#app')\n```\n"
            const text = "说一说常见的请求头和相应头都有什么呢？\n\n**1. 请求(客户端->服务端**\n[request])\n\n    GET(请求的方式) /newcoder/hello.html(请求的目标资源) HTTP/1.1(请求采\t 用的协议和版本号)\n    Accept: */*(客户端能接收的资源类型)\n    Accept-Language: en-us(客户端接收的语言类型)\n    Connection: Keep-Alive(维护客户端和服务端的连接关系)\n    Host: localhost:8080(连接的目标主机和端口号)\n    Referer: http://localhost/links.asp(告诉服务器我来自于哪里)\n    User-Agent: Mozilla/4.0(客户端版本号的名字)\n    Accept-Encoding: gzip, deflate(客户端能接收的压缩数据的类型)\n    If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(缓存时间) \n    Cookie(客户端暂存服务端的信息)\n    Date: Tue, 11 Jul 2000 18:23:51 GMT(客户端请求服务端的时间)\n\n**1. 响应(服务端->客户端**\n[response])\n\n    HTTP/1.1(响应采用的协议和版本号) 200(状态码) OK(描述信息)\n    Location: http://www.baidu.com(服务端需要客户端访问的页面路径) \n    Server:apache tomcat(服务端的Web服务端名)\n    Content-Encoding: gzip(服务端能够发送压缩编码类型) \n    Content-Length: 80(服务端发送的压缩数据的长度) \n    Content-Language: zh-cn(服务端发送的语言类型) \n    Content-Type: text/html; charset=GB2312(服务端发送的类型及采用的编码方式)\n    Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT(服务端对该资源最后修改的时间)\n    Refresh: 1;url=http://www.it315.org(服务端要求客户端1秒钟后，刷新，然后访问指定的页面路径)\n    Content-Disposition: attachment; filename=aaa.zip(服务端要求客户端以下载文件的方式打开该文件)\n    Transfer-Encoding: chunked(分块传递数据到客户端）  \n    Set-Cookie:SS=Q0=5Lb_nQ; path=/search(服务端发送到客户端的暂存数据)\n    Expires: -1//3种(服务端禁止客户端缓存页面数据)\n    Cache-Control: no-***(服务端禁止客户端缓存页面数据)  \n    Pragma: no-***(服务端禁止客户端缓存页面数据)   \n    Connection: close(1.0)/(1.1)Keep-Alive(维护客户端和服务端的连接关系)  \n\n    Date: Tue, 11 Jul 2000 18:23:51 GMT(服务端响应客户端的时间)\n在服务器响应客户端的时候，带上Access-Control-Allow-Origin头信息，解决跨域的一种方法\n"
            const result = this.$md.render(text + code)
            this.formdata.content = result
            // console.log(result)
        },
        changeSave () {
            this.is_foucs = !this.is_foucs
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
        padding: 20px;
        // min-height: 800px;
        .contents {
            // background-color: aqua;
            width: 100%;
            height: 100%;
            .a-title {
                font-size: 20px;
                height: 40px;
                line-height: 40px;
                margin: 0;
                font-weight: 600;
            }
            .a-info {
                display: flex;
                align-items: center;
                // border: 1px solid #f0f1f5;
                height: 50px;
                line-height: 25px;
                p {
                    margin: 0;
                }
            }
        }
    }
    .right {
        width: 300px;
        min-height: 800px;
        .author{
            background-color: #fff;
            padding: 20px;
            width: 100%;
            height: 250px;
            .avatar-info {
                font-size: 18px;
                display: flex;
                align-items: center;
            }
            .art-info {
                width: 100%;
                height: 100px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                .count{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    cursor: pointer;
                }
                // background-color: antiquewhite;
            }
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