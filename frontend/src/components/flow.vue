<!--
    test
-->
<template>
    <div class="flow">
        <div id="1" class="item" style="top: 0px;left: 0px">开始节点</div>
        <div id="2" class="item" style="top: 100px;left: 0px">测试节点</div>
        <div id="3" class="item" style="top: 200px;left: 0px">结束节点</div>
    </div>
</template>

<script>
import { jsPlumb } from 'jsplumb'
export default {
    name: 'flow',
    components: {},
    data () {
        return {
            common: {
                endpoint: 'Rectangle',
                connector: ['Bezier'],
                anchor: ['left', 'Right']
            }
        }
    },
    mounted () {
        console.log(jsPlumb)
        this.init()
    },
    methods: {
        init () {
            const common = {
                isSource: true,
                isTarget: true,
                endpoint: 'Rectangle',
                connector: ['Bezier'],
                maxConnections: -1,
                anchor: [
                    "TopCenter",
                    "RightMiddle",
                    "BottomCenter",
                    "LeftMiddle"
                ],
                paintStyle: { stroke: 'skyblue', strokeWidth: 3},
                endpointStyle: { fill: 'skyblue', outlineStroke: 'skyblue', outlineWidth: 0.5 },
                overlays: [ ['Arrow', { width: 12, length: 12, location: 0.5 }] ]
            }
            jsPlumb.ready(function () {
                jsPlumb.draggable('1')
                jsPlumb.draggable('2')
                jsPlumb.draggable('3')
                jsPlumb.addEndpoint('2', {
                    anchor: ['Right']
                }, common)
                jsPlumb.addEndpoint('3', {
                    anchor: ['Right']
                }, common)
                jsPlumb.connect({
                    source: '1',
                    target: '2',
                }, common)
                jsPlumb.connect({
                    source: '2',
                    target: '3',
                }, common)
            })
        }
    }
}
</script>

<style lang="less" scoped>
.flow {
    width: 100%;
    height: 100%;
    position: relative;
    .item {
        width: 100px;
        height: 40px;
        border: 1px solid skyblue;
        border-radius: 20px;
        position: absolute;
        line-height: 40px;
        text-align: center;
        font-size: 12px;
    }
}
</style>