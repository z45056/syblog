<template>
    <div class="basicInfo">
        <a-avatar class="acatar" :size="100" icon="user" />
        <div class="basic">
            <div class="basic-user">
                <span class="basic-name">{{ userInfo.nick_name || userInfo.username }}</span>
                <i class="iconfont"></i>
                <span class="basic-grade">Lv{{ 4 }}</span>
                <!-- <p class="basic_ids"></p> -->
            </div>
            <div class="basic-laber">
                <i class="iconfont icon-xiaoxi">{{ userInfo.signature }}</i>
            </div>
            <div class="basic-edit">
                <a-button>编辑</a-button>
            </div>
        </div>
        <div class="basic-count">
            <div class="count">
                <span>0</span>
                <span>粉丝</span>
            </div>
            <a-divider type="vertical" />
            <div class="count">
                <span>1</span>
                <span>关注</span>
            </div>
            <a-divider type="vertical" />
            <div class="count">
                <span>0</span>
                <span>获赞</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'basicInfo',
    props: {
        userInfo: Object
    }
}
</script>

<style lang="less" scoped>
.basicInfo {
    width: 100%;
    height: 160px;
    border-radius: 4px;
    padding: 20px;
    background-color: #fff;
    display: flex;
    .acatar {
        width: 100px;
        height: 100px;
        margin-right: 20px;
    }
    .basic {
        height: 120px;
        width: 760px;
        display: flex;
        margin-right: 20px;
        flex-direction: column;
        .basic-user {
            font-size: 14px;
        }
        .basic-laber {
            font-size: 12px;
        }
    }
    .basic-count {
        width: 300px;
        height: 100%;
        padding: 50px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .count {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>