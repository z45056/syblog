<template>
    <div class="page">
        <navs></navs>
        <div class="page-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import navs from './components/nav.vue'
export default {
    name: 'Root',
    components: {
        navs
    },
    data () {
        return {
        }
    },
    // mounted () {
    //     console.log()
    // }
}
</script>

<style lang="less" scoped>
.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .page-nav {
        width: 100%;
        height: 60px;
    }
    .page-content {
        flex: 1;
        width: 100%;

    }
}
</style>