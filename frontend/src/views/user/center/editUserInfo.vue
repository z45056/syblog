<template>
    <div class="editInfo-content">
        <div class="edit-user-info">
            <a-form-model :model="formData" labelAlign="left" :labelCol="{span: 4}" :wrapperCol="{span: 20}">
                <a-form-model-item label="昵称">
                    <a-input v-model="formData.nickName" />
                </a-form-model-item>
                <a-form-model-item label="性别">
                    <a-radio-group v-model="formData.sex">
                        <a-radio value="0">
                            男
                        </a-radio>
                        <a-radio value="1">
                            女
                        </a-radio>
                    </a-radio-group>
                </a-form-model-item>
                <a-form-model-item label="个性签名">
                    <a-textarea
                        v-model="formData.signature"
                        placeholder="Controlled autosize"
                        :auto-size="{ minRows: 3, maxRows: 5 }"/>
                </a-form-model-item>
            </a-form-model>
            <a-button style="margin: 0 auto; display: block">保存</a-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'EditUserInfo',
    data () {
        return {
            formData: {
                nickName: '',
                sex: '',
                signature: ''
            }
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.userInfo
        })
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            if (this.userInfo) {
                const { nick_name, sex, signature } = this.userInfo
                this.formData.nickName = nick_name
                this.formData.sex = String(sex)
                this.formData.signature = signature
            }
        }
    }
}
</script>

<style lang="less" scoped>
.edit-user-info {
    width: 600px;
    margin: 40px auto;
}
</style>