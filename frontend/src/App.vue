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