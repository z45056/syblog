<template>
    <div class="user">
        <div class="basic">
            <basicInfo :user-info="userInfo" />
        </div>
        <div class="person">
            <user-conter @getCurActive="getCurActive"></user-conter>
            <edit-info :cur-active="curActive" :user-info="userInfo"></edit-info>
        </div>
    </div>
</template>

<script>
import basicInfo from './basicInfo.vue'
import userConter from './userCenter.vue'
import editInfo from './editInfo.vue'
export default {
    name: 'User',
    data () {
        return {
            curActive: 'my_basic_info',
            userInfo: {}
        }
    },
    components: {
        basicInfo,
        userConter,
        editInfo
    },
    mounted () {
        this.init()
    },
    methods: {
        getCurActive (val) {
            this.curActive = val
        },
        init () {
            this.$store.dispatch('user/get_user_info').then(res => {
                console.log(res)
                this.userInfo = res.data
                this.$store.commit('user/setUserInfo', res.data)
                console.log(this.$store)
            }).catch(e => {
                console.warn(e.result)
            })
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