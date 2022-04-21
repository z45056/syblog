<template>
    <div class="create-page">
        <a-form-model layout="vertical" :model="formData" >
            <a-form-model-item label="标题">
                <a-input v-model="formData.title" placeholder="Username">
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                </a-input>
            </a-form-model-item>
            <a-form-model-item label="分类">
                <a-input v-model="formData.desc" type="password" placeholder="Password">
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                </a-input>
            </a-form-model-item>
            <a-form-model-item>
                <mavon-editor class="editor" v-model="formData.content"></mavon-editor>
            </a-form-model-item>
        </a-form-model>
        <div class="content markdown-body" v-html="detail"></div>
    </div>
</template>

<script>
import 'github-markdown-css/github-markdown.css'
export default {
    name: 'Creation',
    data () {
        return {
            formData: {
                title: '',
                desc: '',
                content: ''
            }
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

    }
}
</script>

<style lang='less' scoped>

.create-page {
    width: 1200px;
    margin: 30px auto;
    // background-color: #fff;
    .editor {
        width: 100%;
        height: 800px;
    }
}
</style>