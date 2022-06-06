import './asset/css/reset.css'
import './asset/less/app.less'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vue from 'vue'
import App from './App.vue'
import './asset/font/iconfont.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
const markdownIt = require('markdown-it')
const hljs = require('highlight.js')
Vue.prototype.$md = new markdownIt({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                    '</code></pre>';
            } catch (__) { }
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
})
// Vue.prototype.$md.options.highlight = true
import 'github-markdown-css'
const CryptoJS = require('crypto-js')
Vue.prototype.$cjs = CryptoJS
Vue.prototype.$bus = new Vue()
Vue.use(mavonEditor)
Vue.use(Antd)
// 登录弹出框
import router from './router/index'
import store from './store'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
