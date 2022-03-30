<template>
    <div class="editInfo">
        <div class="editInfo-title">编辑资料</div>
        <template v-if="curActive === 'my_basic_info'">
            <edit-user-info></edit-user-info>
        </template>
        <template v-if="curActive === 'my_process'">
            <div>我的流程</div>
        </template>
        <template v-if="curActive === 'my_favorite'">
            <div>我的收藏</div>
        </template>
        <template v-if="curActive === 'change_password'">
            <edit-password></edit-password>
        </template>
        <template v-if="curActive === 'my_issue'">
            <div>我的发布</div>
        </template>
    </div>
</template>

<script>
import editUserInfo from './center/editUserInfo.vue'
import editPassword from './center/editPassword.vue'
export default {
    name: 'EditInfo',
    props: {
        curActive: String
    },
    components: {
        editUserInfo,
        editPassword
    }
}
</script>

<style lang="less" scoped>
.editInfo {
    width: 920px;
    height: 800px;
    background-color: #fff;
    margin: 20px 0;
    .editInfo-title {
        width: 100%;
        height: 50px;
        line-height: 49px;
        padding: 0 20px;
        font-weight: 500;
        font-size: 14px;
        border-bottom: 1px solid #ebebeb;
    }
    .editInfo-content {
        width: 100%;
        padding: 20px;
    }
}
</style>