<!-- memberSelect -->
<template>
    <a-form-model-item class="form-item" :label="item.label">
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
    </a-form-model-item>
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
.form-item {
    width: 100%;
    height: 100%;
    margin: 20px;
    box-sizing: border-box;
}
</style>