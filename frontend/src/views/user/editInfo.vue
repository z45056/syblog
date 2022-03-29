<template>
    <div class="editInfo">
        <!-- <flow /> -->
        <field-info></field-info>
    </div>
</template>

<script>
// import flow from '../../components/flow.vue'
import fieldInfo from '../../components/fieldInfo.vue'
export default {
    name: 'EditInfo',
    components: {
        // flow,
        fieldInfo
    }
}
</script>

<style lang="less" scoped>
.editInfo {
    width: 920px;
    height: 800px;
    background-color: #fff;
    margin: 20px 0;
}
</style>