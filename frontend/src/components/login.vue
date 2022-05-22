<template>
    <div class="login-page">
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit">
            <a-form-item>
                <a-input
                    v-decorator="['username', { rules: [{ required: true, message: 'Please input your username!' }] }]"
                    placeholder="Username">
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]"
                    type="password"
                    placeholder="Password">
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
        <a-form-item>
        <a-checkbox
            v-decorator="[
            'remember',
            {
                valuePropName: 'checked',
                initialValue: true,
            },
            ]"
        >
            Remember me
        </a-checkbox>
        <a class="login-form-forgot" href="">Forgot password</a>
        <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>
        Or
        <a href="">register now!</a>
        </a-form-item>
  </a-form>
  </div>
</template>

<script>
import fieldInfo from '../components/fieldInfo.vue'
// import cookie from 'cookie'
export default {
    name: "login",
    components: {
        fieldInfo
    },
    data() {
        return {
            formData: {
                username: '',
                password: '',
                checkPass: ''
            },
            rules: {
                username: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' },
                ],
                password: [{ required: true, message: 'Please input Activity password', trigger: 'blur' }],
            },
            layout: {
                labelCol: { span: 8 },
                wrapperCol: { span: 16 },
            }
        };
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
        setCookie (cname, cvalue, exdays){
            const d = new Date();
            d.setTime(d.getTime()+(exdays * 24 * 60 * 60 * 1000));
            const expires = "expires="+d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },
        handleSubmit(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    const params = {
                        username: values.username,
                        password: values.password
                    }
                    this.$store.dispatch('user/login', params).then(res => {
                        this.$message.success('登录成功');
                        this.setCookie('token', res.data.token, 7)
                    }).finally(() => {
                        this.$bus.$emit('openLoginModal', false)
                        this.$bus.$emit('changeLoginStatus')
                    })
                }
            })
        }
    }
};
</script>

<style lang="less" scoped>

.login-page {
    width: 100%;
    height: 100%;
    // background: linear-gradient(skyblue, pink);
    position: relative;
    overflow: hidden;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>