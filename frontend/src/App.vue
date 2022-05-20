<template>
    <div class="page">
        <navs></navs>
        <div class="page-content">
            <router-view></router-view>
        </div>
        <a-modal
            width="450"
            v-model="visible"
            :centered="true"
            :maskClosable="false"
            :destroyOnClose="true"
            :footer="false"
            title="登录">
            <login></login>
        </a-modal>
    </div>
</template>

<script>
import navs from './components/nav.vue'
import login from './components/login.vue'
export default {
    name: 'Root',
    components: {
        navs,
        login
    },
    data () {
        return {
            visible: false
        }
    },
    created () {
        this.$bus.$on('openLoginModal', val => {
            this.visible = val
        })
    }
}
</script>

<style lang="less" scoped>
.page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(240, 241, 245);

    .page-nav {
        width: 100%;
        height: 60px;
    }
    .page-content {
        flex: 1;
        width: 100%;
        margin: 0 auto;
        min-width: 1200px;
        overflow-x: hidden;
    }
}
</style>