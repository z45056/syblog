import './asset/css/reset.css'
import './asset/less/app.less'
import Vue from 'vue'
import App from './App.vue'
import './asset/font/iconfont.css'

new Vue({
    render: h => h(App)
}).$mount('#app')