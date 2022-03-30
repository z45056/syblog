<template>
    <div class="sy-form-view">
        <a-form-model ref="customForm" :model="form" :rules="rules" :layout="'inline'" :labelCol="{ span: 4 }" :wrapperCol="{ span: 14 }" :labelAlign="'left'">
            <template v-for="(item, index) in fields">
                <component
                    v-if="item.showField"
                    :key="index"
                    :is="'SY-' + item.type"
                    v-model="form[item.key]"
                    :ref="'component' + index"
                    :item="item"
                    :fields="fields">
                </component>
            </template>
        </a-form-model>
    </div>
</template>

<script>
import string from './fieldComponents/string.vue'
import memberSelect from './fieldComponents/memberSelect.vue'
import datePicker from './fieldComponents/datePicker.vue'
import getValidationRules from './fieldComponents/validate.js'

export default {
    name: 'FieldInfo',
    components: {
        'SY-STRING': string,
        'SY-MEMBERSELECT': memberSelect,
        'SY-DATEPICKER': datePicker,
    },
    props: {
        fields: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            form: {},
            rules: {}
        }
    },
    watch: {
        fields: {
            // 获取form value
            handler (val) {
                if (Object.keys(val).length !== 0) {
                    val.forEach(item => {
                        this.$set(this.form, item.key, item.value)
                    })
                }
            },
            deep: true
        }
    },
    created () {
        const list = this.fields.map(item => item.key)
        list.forEach(item => {
            // 设置form key
            this.$set(this.form, item, '')
            // 获取验证规则
            this.$set(this.rules, item, getValidationRules(item))
        })
    },
    methods: {
    }
}
</script>

<style>

</style>