<template>
    <div class="user">
        <div class="basic">
            <basicInfo />
        </div>
        <div class="person">
            <userConter />
            <editInfo />
        </div>
    </div>
</template>

<script>
import basicInfo from './basicInfo.vue'
import userConter from './userConter.vue'
import editInfo from './editInfo.vue'
export default {
    name: 'User',
    components: {
        basicInfo,
        userConter,
        editInfo
    }
}
</script>

<style lang="less" scoped>
.user {
    width: 1200px;
    margin: 30px auto;
    .basic {
        width: 100%;
        height: 100%;
    }
    .person {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
}
</style>