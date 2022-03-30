<template>
    <div class="editInfo">
        <template v-if="curActive === 'my_basic_info'">
            <div>编辑资料</div>
        </template>
        <template v-if="curActive === 'my_process'">
            <div>我的流程</div>
        </template>
        <template v-if="curActive === 'my_favorite'">
            <div>我的收藏</div>
        </template>
        <template v-if="curActive === 'change_password'">
            <div>修改密码</div>
        </template>
        <template v-if="curActive === 'my_issue'">
            <div>我的发布</div>
        </template>
    </div>
</template>

<script>
// import flow from '../../components/flow.vue'
import fieldInfo from '../../components/fieldInfo.vue'
export default {
    name: 'EditInfo',
    props: {
        curActive: String
    },
    components: {
        // flow,
        fieldInfo
    }
}
</script>

<style lang="less" scoped>
.editInfo {
    width: 920px;
    height: 800px;
    background-color: #fff;
    margin: 20px 0;
}
</style>