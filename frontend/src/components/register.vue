<template>
    <div class="content">
        <h2 class="title">欢迎来到注册页</h2>
        <a-form-model
            class="form"
            ref="ruleForm"
            :model="formData"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol">
            <a-form-model-item ref="username" label="用户名" prop="username" required>
                <a-input v-model="formData.username" placeholder="input username"/>
            </a-form-model-item>
            <a-form-model-item ref="password" label="密码" prop="password" required>
                <a-input-password v-model="formData.password" placeholder="input password" />
            </a-form-model-item>
            <a-form-model-item label="性别" prop="gender">
                <a-radio-group v-model="formData.gender">
                    <a-radio value="1">
                    男
                    </a-radio>
                    <a-radio value="2">
                    女
                    </a-radio>
                </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="生日" prop="birthday" required>
                <a-date-picker
                    v-model="formData.birthday"
                    show-time
                    type="date"
                    placeholder="Pick a date"
                    style="width: 100%;"/>
            </a-form-model-item>
            <a-form-model-item label="权限" prop="auth">
                <a-switch v-model="is_auth"/>
                <a-select v-if="is_auth" mode="tags" v-model="formData.auth" style="width: 100%" placeholder="Tags Mode">
                    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                    {{ (i + 9).toString(36) + i }}
                    </a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="职业" prop="profession">
                <a-select v-model="formData.profession" placeholder="please select your zone">
                    <a-select-option value="student">
                    学生
                    </a-select-option>
                    <a-select-option value="free">
                    自由人
                    </a-select-option>
                </a-select>
            </a-form-model-item>
            <a-form-model-item label="个人备注" prop="desc">
                <a-input v-model="formData.desc" type="textarea" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" @click="onSubmit">
                    注册
                </a-button>
                <a-button style="margin-left: 10px;" @click="resetForm">
                    重置
                </a-button>
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
                gender: '',
                birthday: '',
                auth: [],
                profession: '',
                desc: ''
            },
            is_auth: false,

            labelCol: { span: 4 },
            wrapperCol: { span: 16 },
            rules: {
                username: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' },
                    { min: 5, max: 20, message: 'Length should be 5 to 20', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' },
                    { min: 5, max: 20, message: 'Length should be 5 to 20', trigger: 'blur' },
                ],
                gender: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                alert('submit!');
                } else {
                console.log('error submit!!');
                return false;
                }
            });
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        },
    }
}
</script>

<style lang="less" scoped>
.content {
    // padding: 20px 200px;
    width: 1200px;
    margin: 20px auto;
    background-color: #ffffff;
    height: auto;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
    .form {
        width: 800px;
        height: 100%;
        padding: 20px;
        margin: 0 auto;
    }
    .title {
        // text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin: 20px;
    }
}
</style>