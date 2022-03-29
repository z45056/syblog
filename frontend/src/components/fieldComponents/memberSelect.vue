<!-- memberSelect -->
<template>
    <a-form-item :label="item.label">
        <a-select
            v-model="item.value"
            placeholder="Select a option and change input text above"
            @change="handleSelectChange">
            <a-select-option
                v-for="(option, index) in item.options"
                :key="index"
                :value="option.id">
                {{ option.name}}
            </a-select-option>
        </a-select>
    </a-form-item>
</template>

<script>
export default {
    name: 'MEMBERSELECT',
    props: {
        item: {
            type: Object,
            default: () => {}
        },
        fields: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        handleSelectChange (val) {

        }
    }
}
</script>

<style lang='less' scoped>

</style>