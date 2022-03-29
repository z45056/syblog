<!-- string -->
<template>
    <a-form-item :label="item.label">
        <a-input v-model="item.value"></a-input>
    </a-form-item>
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

</style>