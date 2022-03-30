<template>
    <div class="userConter">
        <div class="user-title">用户中心</div>
        <ul class="content">
            <li :class="['content-item', active === item.key ? 'active' : '']" v-for="item in list" :key="item.key" @click="changeActive(item.key)">
                <i :class="['iconfont', item.icon]"></i>
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'UserConter',
    data () {
        return {
            active: 'my_basic_info',
            list: [
                {
                    name: '编辑资料',
                    key: 'my_basic_info',
                    icon: 'icon-EmojiAdd'
                },
                {
                    name: '我的流程',
                    key: 'my_process',
                    icon: 'icon-EmojiAdd'
                },
                {
                    name: '我的收藏',
                    key: 'my_favorite',
                    icon: 'icon-EmojiAdd'
                },
                {
                    name: '修改密码',
                    key: 'change_password',
                    icon: 'icon-EmojiAdd'
                },
                {
                    name: '我的发布',
                    key: 'my_issue',
                    icon: 'icon-EmojiAdd'
                }
            ]
        }
    },
    methods: {
        changeActive (key) {
            this.$emit('getCurActive', key)
            this.active = key
        }
    }
}
</script>

<style lang="less" scoped>
.userConter {
    width: 250px;
    min-height: 900px;
    background-color: #fff;
    margin: 20px 0;
    .user-title {
        font-size: 16px;
        height: 40px;
        line-height: 39px;
        padding: 0 20px;
        border-bottom: 1px solid #ebebeb;
    }
    .content {
        width: 100%;
        .content-item {
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            text-align: center;
            color: #666666;
            cursor: pointer;
            i {
                margin-left: -10px;
                margin-right: 10px;
            }
            &:hover {
                color: #00c3ff;
            }
        }
        .active {
            color: #00c3ff;
        }
    }
}
</style>