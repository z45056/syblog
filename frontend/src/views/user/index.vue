<template>
    <div class="user">
        <div class="basic">
            <basicInfo />
        </div>
        <div class="person">
            <user-conter @getCurActive="getCurActive"></user-conter>
            <edit-info :cur-active="curActive"></edit-info>
        </div>
    </div>
</template>

<script>
import basicInfo from './basicInfo.vue'
import userConter from './userConter.vue'
import editInfo from './editInfo.vue'
export default {
    name: 'User',
    data () {
        return {
            curActive: 'my_basic_info'
        }
    },
    components: {
        basicInfo,
        userConter,
        editInfo
    },
    methods: {
        getCurActive (val) {
            this.curActive = val
        }
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