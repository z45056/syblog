<template>
    <div class="nav" v-if="!islogin">
        <div class="nav-bg">
            <div class="nav-content">
                <div class="nav-log"></div>
                <div class="nav-list">
                    <template v-for="nav in routeList" >
                        <router-link class="nav-item" :to="{ name: nav.name }" :key="nav.id">{{nav.name}}</router-link>
                    </template>
                </div>
                <div class="user-content">
                    <a-button type="primary" @click="createBG">发布</a-button>
                    <a-input class="header-search"></a-input>
                    <a-dropdown :placement="'bottomRight'" width="100">
                        <a-avatar icon="user" />
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <router-link :to="{ name: 'user'}">个人中心</router-link>
                            </a-menu-item>
                            <a-menu-item>
                                <span>退出登录</span>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navs",
    data () {
        return {
            islogin: false,
            routeList: [
                {
                    name: 'home',
                    id: 1
                },
                // {
                //     name: 'user',
                //     id: 2
                // }
            ]
        }
    },
    watch: {
        '$route.name' (val) {
            if (val === 'login') {
                this.islogin = true
            }
        }
    },
    methods: {
        createBG () {
            this.$router.push({
                name: 'creation',
                query: this.$route.name
            })
        }
    }
}
</script>

<style scoped lang="less">
@color: #708090;
.nav {
    width: 100%;
    height: 60px;
    background-color: #2d2f33;
    .nav-bg {
        width: 1200px;
        margin: 0 auto;
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
                    color: white;
                    cursor: pointer;
                    &:hover {
                        color: black;
                        background-color: aliceblue;
                    }
                }
            }
            .user-content {
                width: 300px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .header-search {
                    width: 150px;
                }
            }
        }
    }
}
</style>