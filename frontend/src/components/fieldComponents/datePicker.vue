<!-- datePicker -->
<template>
    <a-form-model-item class="form-item" :label="item.label" :prop="`${ item.key }`">
        <a-range-picker
            v-model="item.value"
            show-time
            type="date"
            style="width: 100%;"
        />
    </a-form-model-item>
</template>

<script>
export default {
    name: 'DATEPICKER',
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
    height: 100%;
    margin: 20px;
    box-sizing: content-box;
}
</style>