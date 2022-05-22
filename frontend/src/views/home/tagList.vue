<template>
    <div class="tag-list">
        <div class="tag-header">
            <p class="tag-title">常用文章标签</p>
            <div class="tag-search">
                <a-input-search placeholder="请输入文章标题内容" style="width: 300px" @search="onSearch" />
                <ul v-if="searchList.length !== 0" class="search-list">
                    <li v-for="(item, index) in searchList" :key="index"></li>
                </ul>
            </div>
        </div>
        <div class="tag-content">
            <div class="tag-item" v-for="item in tagList" :key="item.key" :style="{ 'background-color': item.color }" @click="handleTagJump(item)">{{ item.name }}</div>
        </div>
    </div>
</template>

<script>

const TAGLIST = [
    {
        name: 'Vue',
        key: 'vue',
        color: '#21c185'
    },
    {
        name: 'React',
        key: 'react',
        color: '#61dafb'
    },
    {
        name: 'Js',
        key: 'js',
        color: '#ffca28'
    },
    {
        name: 'React',
        key: 'react1',
        color: '#61dafb'
    },
    {
        name: 'React',
        key: 'react2',
        color: '#61dafb'
    }
]

export default {
    name: 'TagList',
    data () {
        return {
            tagList: TAGLIST,
            searchList: []
        }
    },
    methods: {
        handleTagJump (item) {
            this.$router.push({
                name: 'article',
                query: {
                    tag: item.name
                }
            })
        },
        // 模糊搜索文章
        onSearch (val) {
            console.log(val)
        }
    }
}
</script>

<style lang="less" scoped>
.tag-list {
    width: 100%;
    height: 100%;
    padding: 10px;
    .tag-header {
        display: flex;
        justify-content: space-between;
        .tag-search {
            position: relative;
            width: 300px;
            .search-list {
                width: 300px;
                height: 150px;
                box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 10%);
                background-color: #fff;
                position: absolute;
                top: 36px;
                left: 0;
            }
        }
    }
    .tag-content {
        width: 100%;
        margin-top: 5px;
        display: flex;
        flex-flow: wrap;
        .tag-item {
            text-align: center;
            width: 23%;
            height: 30px;
            border-radius: 8px;
            font-size: 20px;
            color: #fff;
            line-height: 30px;
            margin: 10px;
            float: left;
            cursor: pointer;
        }
    }
}
</style>