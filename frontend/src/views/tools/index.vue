<template>
    <div class="tools">
        <a-tabs default-active-key="1">
            <a-tab-pane key="1">
                <span slot="tab">
                    <a-icon type="apple" />
                    Tab 1
                </span>
                <tableToPdf></tableToPdf>
            </a-tab-pane>
            <a-tab-pane key="2">
                <span slot="tab">
                    <a-icon type="android" />
                    Tab 2
                </span>
                Tab 2
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import tableToPdf from './components/tableToPdf.vue'
export default {
    name: 'Tools',
    components: {
        tableToPdf
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.tools {
    width: 1200px;
    height: 800px;
    background-color: #fff;
    margin: 30px auto;
}
</style>