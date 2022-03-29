<template>
    <div class="sy-form-view" ref="fieldContent">
        <a-form-model :model="form">
            <template v-for="(item, index) in fields">
                <div :key="index" v-if="item.showField">
                    <component
                        :is="'SY-' + item.type"
                        :ref="'component' + index"
                        :item="item"
                        :fields="fields">
                    </component>
                </div>
            </template>
        </a-form-model>
    </div>
</template>

<script>
import string from './fieldComponents/string.vue'
import memberSelect from './fieldComponents/memberSelect.vue'
export default {
    name: 'FieldInfo',
    components: {
        'SY-string': string,
        'SY-memberSelect': memberSelect
    },
    data () {
        return {
            form: {},
            fields: [
                {
                    type: 'string',
                    label: '输入框',
                    value: '666',
                    key: 'name',
                    showField: true
                },
                {
                    type: 'memberSelect',
                    label: '人员选择器',
                    value: '',
                    key: 'member',
                    options: [
                        {
                            id: '1',
                            name: 'zhangyx',
                            value: 'zhangyx'
                        },
                        {
                            id: '2',
                            name: 'zzm',
                            value: 'zzm'
                        },
                        {
                            id: '3',
                            name: 'cg',
                            value: 'cg'
                        }
                    ],
                    showField: true
                }
            ]
        }
    },
    created () {
        console.log(this.fields)
        const list = this.fields.map(item => item.key)
        list.forEach(item => {
            this.$set(this.form, item, '')
        })
    }
}
</script>

<style>

</style>