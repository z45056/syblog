<template>
    <div class="editInfo-content">
        <div class="edit-user-info">
            <a-form-model :model="formData" labelAlign="left" :labelCol="{span: 4}" :wrapperCol="{span: 20}">
                <a-form-model-item label="昵称">
                    <a-input v-model="formData.username" />
                </a-form-model-item>
                <a-form-model-item label="性别">
                    <a-radio-group v-model="formData.sex">
                        <a-radio value="1">
                            男
                        </a-radio>
                        <a-radio value="2">
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
export default {
    name: 'EditUserInfo',
    data () {
        return {
            formData: {
                username: '',
                sex: '',
                signature: ''
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