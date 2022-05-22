<template>
    <div class="article">
        <div class="search">
            <a-input-search placeholder="input search text" size="large" @search="onSearch">
                <a-button slot="enterButton">搜索</a-button>
            </a-input-search>
        </div>
        <div class="classify">
            <div class="tag-title">分类：</div>
            <div class="tag">
                <span class="tag-item" :class="{ 'active': item.name === active }" v-for="item in list" :key="item.key" @click="changeTag(item.name)">{{ item.name }}</span>
            </div>
        </div>
        <div class="content">
            <a-card class="content-item" v-for="item in list" :key="item.key" :title="item.name" hoverable :bordered="false" @click="enteyDetail(item)">
                <p>{{ item.name }}</p>
                <p>Card content</p>
                <p>Card content</p>
            </a-card>
        </div>
    </div>
</template>

<script>

const list = [
    { name: '全部', key: 'all'},
    { name: '第一章', key: 'a'},
    { name: '第二章', key: 'b'},
    { name: '第三章', key: 'c'},
    { name: '第四章', key: 'd'},
    { name: '第五章', key: 'e'},
    { name: '第六章', key: 'f'},
    { name: '第七章', key: 'g'},
    { name: '第八章', key: 'h'},
    { name: '第九章', key: 'i'}
]
export default {
    name: 'Article',
    data () {
        return {
            list,
            active: 'A'
        }
    },
    methods: {
        onSearch (val) {
            console.log(val)
        },
        changeTag (val) {
            this.active = val
        },
        enteyDetail (val) {
            console.log(val)
            this.$router.push({
                name: 'detail',
                query: {
                    a_id: val.key
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.article {
    width: 1200px;
    margin: 30px auto;
    .search {
        width: 60%;
        margin: 20px auto;
    }
    .classify {
        width: 100%;
        // height: 40px;
        line-height: 40px;
        background-color: #fff;
        display: flex;
        margin-bottom: 20px;
        .tag-title {
            width: 60px;
            line-height: 47px;
            text-align: center;
        }
        .tag {
            display: flex;
            flex-flow: wrap;
            flex: 1;
            .tag-item {
                padding: 4px 10px;
                cursor: pointer;
                &:hover {
                    color: #a9c7e0;
                }
            }
            .active {
                background: #40a9ff;
                color: #fff;
            }
        }
    }
    .content {
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 280px);
        grid-gap: 10px;
        .content-item {
            width: 280px;
            height: 200px;
        }
    }
}
</style>
