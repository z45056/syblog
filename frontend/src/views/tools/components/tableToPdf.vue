<template>
    <div class="t-pdf">
        <a-button type="primary" @click="handleClickAdd('row')">
            添加一行
        </a-button>
        <a-button type="primary" @click="handleClickAdd('column')">
            添加一列
        </a-button>
        <a-button type="primary">
            配置项
        </a-button>
        <div class="t-table">
            <table border="1" :bgcolor="bgColor">
                <tr>
                    <th class="tr-head" v-for="(item, index) in formHeadData" :key="index">
                        {{ item.key }}
                    </th>
                </tr>
                <tr class="tr-body" v-for="(item, index) in trbody" :key="index">
                    <td v-for="(item1, index1) in item.columns" :key="index1">{{ item1.name }}</td>
                </tr>
            </table>
        </div>
        <a-modal v-model="addColumnData.addColumnsvisible" title="添加列" @ok="handleColumnOk">
            <a-form-model :model="addColumnData.config" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-model-item label="列名称">
                    <a-input v-model="addColumnData.config.new_col_name" />
                </a-form-model-item>
                <a-form-model-item label="行内数据">
                    <!-- <a-input v-model="addColumnData.config.row_list" /> -->
                    <div class="table-header">
                        <div class="table-header-title" v-for="(item, index) in addColumnData.config.row_list" :key="index">
                            <div>{{item.title || '--'}}</div>
                            <!-- <div>{{}}</div> -->
                        </div>
                    </div>
                    <div class="table-body">
                        <div class="table-body-content" v-for="(item, index) in addColumnData.config.listData" :key="index">
                            <div class="table-body-content-item">{{item.name}}</div>
                            <div class="table-body-content-item">
                                <a-input style="width: 80%" v-model="item.value" placeholder="输入对应的行数据" />
                            </div>
                        </div>
                    </div>
                </a-form-model-item>
            </a-form-model>
        </a-modal>
    </div>
</template>

<script>
export default {
    name: 'tableToPdf',
    data () {
        return {
            formHeadData: [
                {
                    key: 'name',
                    value: 'sd'
                },
                {
                    key: 'na1me',
                    value: 's33d'
                }
            ],
            trbody: [
                {
                    name: '第一列',
                    key: '1',
                    columns: [
                        {
                            name: '11',
                            key: '1-11'
                        },
                         {
                            name: '22',
                            key: '1-22'
                        }
                    ]
                },
                {
                    name: '第二列',
                    key: '2',
                    columns: [
                        {
                            name: '11eqwr',
                            key: '2-11'
                        },
                         {
                            name: '22',
                            key: '2-22'
                        }
                    ]
                }
            ],
            addColumnData: {
                addColumnsvisible: false,
                cur_row_count: '',
                config: {
                    new_col_name: '',
                    row_list: [
                        {
                            title: '名称(Name)',
                            dataIndex: 'name',
                            key: 'name',
                        },
                        {
                            title: '值(value)',
                            dataIndex: 'value',
                            key: 'value',
                        },
                    ],
                    listData: []
                }
            },
            bgColor: '',
            labelCol: { span: 5 },
            wrapperCol: { span: 14 }
        }
    },
    methods: {
        handleClickAdd (type) {
            if (type === 'row') {
                console.log('添加一行')
                const count = this.trbody[0].columns.length
                const columns = []
                for (let index = 0; index < count; index++) {
                    columns.push({
                        key: ' ',
                        value: ' '
                    })
                }
                this.trbody.push({
                    name: '',
                    key: this.trbody.length + 1,
                    columns
                })
            } else {
                this.addColumnData.addColumnsvisible = true
                this.addColumnData.cur_row_count = this.trbody.length
                const columns = []
                this.trbody.forEach(item => {
                    columns.push({
                        name: item.columns[0].name,
                        key: item.columns[0].name,
                        value: ' '
                    })
                })
                this.addColumnData.config.listData = columns
            }
        },
        handleColumnOk () {
            this.formHeadData.push({
                key: this.addColumnData.config.new_col_name,
                value: 'dqweqw'
            })
            this.addColumnData.config.listData.forEach((item,index) => {
                this.trbody[index].columns.push({
                    name: item.value,
                    key: item.name
                })
            })
            this.addColumnData.addColumnsvisible = false
        }
    }
}
</script>

<style lang="less" scoped>
.t-pdf {
    width: 100%;
    height: 800px;
    padding: 5px;
    .t-table {
        width: 100%;
        height: 100%;
        padding: 10px;
        text-align: center;
        .tr-head {
            height: 60px;
            width: 100px;
            background-color: #eee;
            text-align: center;
        }
        .tr-body {
            height: 60px;
            // width: 100px;
            td {
                width: 100px;
                padding: 2px;
            }
        }
    }
}
.table-header {
    display: flex;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 40px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #d9d9d9;
    background-color: #fafafa;
    .table-header-title {
        border-right: 1px solid #d9d9d9;
        height: 40px;
        flex: 1;
    }
}
.table-body {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid #d9d9d9;
    border-top: none;
    border-bottom: none;
    min-height: 40px;
    text-align: center;
    .table-body-content {
        display: flex;
        border-bottom: 1px solid #d9d9d9;
        height: 40px;
        .table-body-content-item {
            flex: 1;
            border-right: 1px solid #d9d9d9;
            height: 40px;
        }
    }
}
</style>