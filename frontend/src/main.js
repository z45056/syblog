import './asset/css/reset.css'
import './asset/less/app.less'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vue from 'vue'
import App from './App.vue'
import './asset/font/iconfont.css'
Vue.use(Antd)
import router from './router/index'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
