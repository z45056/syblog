<template>
    <div class="login-page">
        <div class="content">
            <div class="center" :class="{'show': active}">
                <a-button class="btn" @click="handleClick">前往{{active ? '登录' : '注册' }}</a-button>
                <div class="login form-view">
                    <fieldInfo ref="loginFrom" :fields="loginFields"></fieldInfo>
                    <div class="submitBtn">
                        <a-button class="submit" type="primary" @click="handleSumbit('login')">登录</a-button>
                    </div>
                </div>
                <div class="register form-view">
                    <fieldInfo ref="registerFrom" :fields="registerFields"></fieldInfo>
                    <div class="submitBtn">
                        <a-button class="submit" type="primary" @click="handleSumbit('register')">注册</a-button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import fieldInfo from '../components/fieldInfo.vue'
export default {
    name: "login",
    components: {
        fieldInfo
    },
    data() {
        return {
            isShow: false,
            active: false,
            loginFields: [
                {
                    type: 'STRING',
                    label: '用户名',
                    value: '',
                    key: 'name',
                    showField: true
                },
                {
                    type: 'STRING',
                    label: '密码',
                    value: '',
                    key: 'password',
                    showField: true
                },
            ],
            registerFields: [
                {
                    type: 'STRING',
                    label: '用户名',
                    value: '',
                    key: 'name',
                    showField: true
                },
                {
                    type: 'STRING',
                    label: '密码',
                    value: '',
                    key: 'password',
                    showField: true
                },
               
            ]
        };
    },
    methods: {
        handleClick () {
           this.active = !this.active
        },
        handleSumbit (type) {
            this.$refs[type + 'From'].$refs.customForm.validate(vali => {
                const { name, password } = this.$refs[type + 'From'].form
                const params = {
                    username: name,
                    password
                }
                console.log(params)
            })
        }
    }
};
</script>

<style lang="less" scoped>

.login-page {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(skyblue, pink);
    position: relative;
    overflow: hidden;
    .content {
        width: 600px;
        height: 400px;
        border-radius: 16px;
        background-color: white;
        position: absolute;
        top: calc(50% - 200px);
        left: calc(50% - 300px);
        overflow: hidden;
        .center {
            position: relative;
            left:calc(100% - 600px);
            top: 0;
            width: 150px;
            height: 100%;
            background-color: white;
            background: url('../asset/img/xinhai.jpeg') no-repeat;
            opacity: 0.9;
            transition: left 1s;
            .btn {
                position: absolute;
                display: block;
                top: 20px;
                left: 32px;
                height: 30px;
                opacity: 0.5;
                border-radius: 4px;
                color: rgb(23, 129, 228);
            }
            .form-view {
                padding: 50px 30px;
            }
            .login {
                position: absolute;
                top: 0;
                right: -450px;
                width: 450px;
                height: 100%;
                transition: width 1s;
                background-size: 100% 100%;
            }
            .register {
                position: absolute;
                top: 0;
                left: -450px;
                width: 450px;
                height: 100%;
                background-size: 100% 100%;
                transition: width 1s;
            }
            
        }
        .show {
            left:calc(100% - 150px)
        }
    }
    .submitBtn {
        text-align: center;
        margin: 20px 0 0 -160px
    }
}
</style>