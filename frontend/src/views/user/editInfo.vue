<template>
    <div class="editInfo">
        <flow />
    </div>
</template>

<script>
import flow from '../../components/flow.vue'
export default {
    name: 'EditInfo',
    components: {
        flow
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