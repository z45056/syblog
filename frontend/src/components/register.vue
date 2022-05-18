<template>
    <div class="content">
        <a-form-model :model="formData" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="用户名">
                <a-input v-model="formData.username" />
            </a-form-model-item>
            <a-form-model-item label="密码">
                <a-input v-model="formData.password" />
            </a-form-model-item>
            <a-form-model-item label="重复密码">
                <a-input v-model="formData.repeat_password" />
            </a-form-model-item>
            <a-form-model-item label="性别">
                <a-radio-group v-model="formData.gender">
                    <a-radio value="1">
                        male
                    </a-radio>
                    <a-radio value="2">
                        female
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="生日">
                <a-date-picker v-model="formData.birthday" @change="onChange" />
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            formData: {
                username: '',
                password: '',
                repeat_password: '',
                gender: '',
                birthday: ''
            },
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    width: 600px;
    height: auto;
}
</style>