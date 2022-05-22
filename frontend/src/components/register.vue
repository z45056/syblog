<template>
    <div class="content">
        <template v-if="is_register">
            <a-result
                status="success"
                title="注册成功!"
                :sub-title="successTitle">
                <template #extra>
                <a-button key="console" type="primary" @click="jumpLogin">
                    立即登录
                </a-button>
                <a-button key="buy" @click="$router.push({ name: 'home' })">
                    返回首页
                </a-button>
                </template>
            </a-result>
        </template>
        <template v-else>
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
                <a-form-model-item ref="email" label="邮箱" prop="email" required>
                    <a-input v-model="formData.email" placeholder="input email" />
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
                <a-form-model-item label="头像" prop="pic">
                    <a-upload
                        name="avatar"
                        list-type="picture-card"
                        class="avatar-uploader"
                        :show-upload-list="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :before-upload="beforeUpload"
                        @change="handleChange">
                        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                        <div v-else>
                            <!-- <a-icon :type="loading ? 'loading' : 'plus'" /> -->
                            <div class="ant-upload-text">
                                Upload
                            </div>
                        </div>
                    </a-upload>
                    <!-- <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                        <img alt="example" style="width: 100%" :src="previewImage" />
                    </a-modal> -->
                </a-form-model-item>
                <a-form-model-item label="生日" prop="birthday" required>
                    <a-date-picker
                        v-model="formData.birthday"
                        format="YYYY-MM-DD"
                        placeholder="Pick a date"
                        style="width: 100%;"
                        @change="handleChangeTime"/>
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
        </template>
    </div>
</template>

<script>
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
import moment from 'moment';
export default {
    name: 'register',
    data () {
        return {
            moment,
            is_register: false,
            loading: false,
            successTitle: '',
            imageUrl: '',
            loginData: {
                username: '',
                password: ''
            },
            formData: {
                username: '',
                password: '',
                email: '',
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
                    const { username, password, email, gender, birthday, desc } = this.formData
                    const params = {
                        username,
                        password,
                        sex: gender,
                        birthday,
                        signature: desc,
                        email
                    }
                    this.$store.dispatch('user/register', params).then(res => {
                        this.$message.success('注册成功');
                        this.loginData.username = params.username
                        this.loginData.password = params.password
                        this.is_register = true
                        this.successTitle = `注册时间：${ new Date() }, 账号状态：良好。`
                    })
                } else {
                    console.error('error submit!!');
                    return false;
                }
            });
        },
        setCookie (cname, cvalue, exdays){
            const d = new Date();
            d.setTime(d.getTime()+(exdays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },
        jumpLogin () {
            const params = {
                username: this.loginData.username,
                password: this.loginData.password
            }
            this.$store.dispatch('user/login', params).then(res => {
                this.$message.success('登录成功');
                this.setCookie('token', res.data.token, 7)
            }).finally(() => {
                this.$bus.$emit('openLoginModal', false)
                this.$bus.$emit('changeLoginStatus')
                this.$router.push({
                    name: 'home'
                })
            })
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        },
        handleChange(info) {
            if (info.file.status === 'uploading') {
                this.loading = true;
                return;
            }
            if (info.file.status === 'done') {
                getBase64(info.file.originFileObj, imageUrl => {
                    this.imageUrl = imageUrl;
                    this.loading = false;
                });
            }
        },
        handleChangeTime (date) {
            this.formData.birthday = moment(date).format('YYYY-MM-DD')
        },
        beforeUpload(file) {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                this.$message.error('You can only upload JPG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('Image must smaller than 2MB!');
            }
            return isJpgOrPng && isLt2M;
        }
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