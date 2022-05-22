<template>
    <div class="create-page">
        <a-form-model layout="vertical" :model="formData" >
            <a-form-model-item label="标题" :wrapperCol="formWarpLayout" :labelCol="formColLayout" required>
                <a-input v-model="formData.title" placeholder="title">
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                </a-input>
            </a-form-model-item>
            <a-form-model-item label="分类" :wrapperCol="formWarpLayout" :labelCol="formColLayout" required>
                <a-select
                    mode="multiple"
                    placeholder="select tag"
                    :value="formData.type"
                    style="width: 100%; z-index: 101"
                    @change="handleChange">
                    <a-select-option v-for="item in options" :key="item.id" :value="item.id">
                    {{ item.name }}
                    </a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item>
                <mavon-editor class="editor" v-model="formData.content"></mavon-editor>
            </a-form-model-item>
        </a-form-model>
        <div class="content markdown-body" v-html="detail"></div>
        <div class="operation">
            <a-button style="margin-right: 20px" type="primary" @click="goBack"><a-icon type="left" /></a-button>
            <a-button style="margin-right: 20px">草稿</a-button>
            <a-button type="primary" :loading="loading" @click="submit">发布</a-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Creation',
    data () {
        return {
            formData: {
                title: '',
                type: [],
                content: "```js\nimport './asset/css/reset.css'\nimport './asset/less/app.less'\nimport Antd from 'ant-design-vue'\nimport 'ant-design-vue/dist/antd.css'\nimport Vue from 'vue'\nimport App from './App.vue'\nimport './asset/font/iconfont.css'\nimport mavonEditor from 'mavon-editor'\nimport 'mavon-editor/dist/css/index.css'\nconst markdownIt = require('markdown-it')\nVue.prototype.$md = new markdownIt()\nimport 'github-markdown-css'\nVue.use(mavonEditor)\nVue.use(Antd)\nimport router from './router/index'\nimport store from './store'\n\nnew Vue({\n    router,\n    store,\n    render: h => h(App)\n}).$mount('#app')\n```\n"
            },
            loading: false,
            formWarpLayout: { span: 10, offset: 0 },
            formColLayout: { span: 1, offset: 0 },
            options: [
                { name: 'js', id: 'js'},
                { name: 'vue', id: 'vue'},
                { name: 'react', id: 'react'},
                { name: 'mini', id: 'mini'},
                { name: 'question', id: 'question'},
            ]
        }
    },
    computed: {
        detail () {
            return this.$md.render(this.formData.content)
        }
    },
    mounted () {
        console.log(this.$md)
    },
    methods: {
        handleChange (item) {
            this.formData.type = item
        },
        goBack () {
            window.history.back()
        },
        submit () {
            this.loading = true
            const timer = setTimeout(() => {
                this.loading = false
                clearTimeout(timer)
            }, 2000);
        }
    }
}
</script>

<style lang='less' scoped>

.create-page {
    width: 1200px;
    margin: 30px auto;
    position: relative;
    // background-color: #fff;
    .editor {
        width: 100%;
        height: 800px;
        z-index: 100;
    }
    .operation {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>