<template>
    <div class="editInfo-content">
        <div class="edit-user-info">
            <div v-if="!isValidate" class="getCode">
                <a-input-search v-model="phone" style="margin-bottom: 20px" placeholder="输入注册手机号码" size="default" @search="getCode">
                    <a-button slot="enterButton" :disabled="vcodeDidsable">发送验证码</a-button>
                </a-input-search>
                <a-input-password v-model="vCode" :disabled="vcodeDidsable" placeholder="输入验证码" />
                <a-button style="margin: 20px auto; display: block" @click="handleChange">提交</a-button>
            </div>
            <div v-else>
                <a-input-password v-model="password" placeholder="输入新密码" />
                <a-button style="margin: 20px auto; display: inline-block" @click="submit">确定修改</a-button>
                <a-button style="margin: 20px auto; display: inline-block" @click="submit">取消</a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditPassword',
    data () {
        return {
            isValidate: false,
            phone: '',
            vcodeDidsable: true,
            vCode: '',
            password: ''
        }
    },
    watch: {
        phone (val) {
            if (val.length === 13) {
                this.vcodeDidsable = false
            } else {
                this.vcodeDidsable = true
            }
        }
    },
    methods: {
        getCode () {
            this.vcodeDidsable = false
        },
        handleChange () {
            this.isValidate = true
        },
        submit () {
            this.isValidate = false
        }
    }
}
</script>

<style lang="less" scoped>
.edit-user-info {
    width: 600px;
    margin: 40px auto;
    .getCode {
        height: 80px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>