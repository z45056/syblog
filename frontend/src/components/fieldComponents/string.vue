<!-- string -->
<template>
    <a-form-model-item class="form-item" :label="item.label" :prop="`${ item.key }`">
        <a-input v-model="item.value"></a-input>
    </a-form-model-item>
</template>

<script>
export default {
    name: 'STRING',
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        fields: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang='less' scoped>
.form-item {
    width: 100%;
    height: 60px;
    margin: 20px 20px 0 20px;
    box-sizing: content-box;
}
</style>