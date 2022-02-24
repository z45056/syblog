<template>
    <div class="nav">
        <div class="nav-content">
            <div class="nav-log"></div>
            <div class="nav-list">
                <div class="nav-item" v-for="nav in routeList" :key="nav.id">
                    <router-link :to="{ name: nav.name }">{{nav.name}}</router-link>
                </div>
            </div>
            <div class="user-content">
                <a-input class="header-search"></a-input>
                <a-avatar icon="user" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navs",
    data () {
        return {
            routeList: [
                {
                    name: 'home',
                    id: 1
                },
                {
                    name: 'user',
                    id: 2
                }
            ]
        }
    },
    methods: {
    
    }
}
</script>

<style scoped lang="less">
@color: #708090;
.nav {
    width: 100%;
    height: 60px;
    background-color: #2d2f33;
    .nav-content {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .nav-log {
            width: 270px;
            height: 100%;
        }
        .nav-list {
            flex: 1;
            display: flex;
            color: white;
            .nav-item {
                width: 100px;
                line-height: 60px;
                text-align: center;
                cursor: pointer;
                &:hover {
                    color: yellow;
                }
            }
        }
        .user-content {
            width: 200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .header-search {
                width: 150px;
            }
        }
    }
}
</style>