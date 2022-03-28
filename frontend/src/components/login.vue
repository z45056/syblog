<template>
    <div class="login-page">
        <div class="content">
            <div class="center" :class="{'show': active}">
                <a-button class="btn" @click="handleClick"></a-button>
                <div class="login"></div>
                <div class="register"></div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            isShow: false,
            active: false
        };
    },
    methods: {
        handleClick () {
           this.active = !this.active
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
        width: 800px;
        height: 500px;
        border-radius: 16px;
        background-color: white;
        position: absolute;
        top: calc(50% - 250px);
        left: calc(50% - 400px);
        overflow: hidden;
        .center {
            position: relative;
            left:calc(100% - 800px);
            top: 0;
            width: 200px;
            height: 100%;
            background-color: white;
            background: url('../asset/img/xinhai.jpeg') no-repeat;
            opacity: 0.9;
            transition: left 1s;
            .btn {
                display: block;
                width: 50px;
                height: 30px;
                margin: 0 auto;
            }
            .login {
                position: absolute;
                top: 0;
                right: -600px;
                width: 600px;
                height: 100%;
                // background-color: skyblue;
                transition: width 1s;
                // background: url('../images/login.jpg') no-repeat;
                background-size: 100% 100%;
            }
            .register {
                position: absolute;
                top: 0;
                left: -600px;
                width: 600px;
                height: 100%;
                // background: url('../images/register.jpg') no-repeat;
                background-size: 100% 100%;
                transition: width 1s;
            }
        }
        .show {
            left:calc(100% - 200px)
        }
    }
}
</style>