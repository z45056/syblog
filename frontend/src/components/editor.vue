<template>
    <div :id="editorId"></div>
</template>
<script>
import E from 'wangeditor'
export default {
    name: 'Editor',
    components: {

    },
    props: {
        editorId: String,
        height: {
            type: Number,
            default () {
                return 150
            }
        },
        zIndex: {
            type: Number,
            default () {
                return 400
            }
        },
        excludeMenus:{
            type: Boolean,
            default () {
                return true
            }
        },
        filterStyle:{
            type: Boolean,
            default () {
                return false
            }
        },
        filterImg:{
            type: Boolean,
            default () {
                return true
            }
        },
    },
    data () {
        return {
            editor: null,
            editorData: '',
        }
    },
    mounted () {
        // const PATH = ''  表情 图片 链接或路径
        const editor = new E(`#${this.editorId}`)
        editor.config.onchange = (newHtml) => {
            this.editorData = newHtml
            this.$emit('editorContent', newHtml)
        }
        // 粘贴样式的过滤
        editor.config.pasteFilterStyle = this.filterStyle
        // 粘贴内容中的图片
        editor.config.pasteIgnoreImg = this.filterImg
        editor.config.height = this.height
        editor.config.zIndex = this.zIndex
        editor.config.excludeMenus = this.excludeMenus ? [
            'emoticon',
            'video',
            'table',
            'strikeThrough',
            'indent',
            'image',
            'lineHeight',
            'foreColor',
            'backColor',
            'link',
            'list',
            'quote'
        ] : []
        editor.config.emotions = [
            // {
            //     title: '', // tab 的标题
            //     type: '', // 'emoji' 或 'image' ，即 emoji 形式或者图片形式
            //     content: [
            //         { alt: '[坏笑]', src: `${PATH}/50/pcmoren_huaixiao_org.png` },
            //     ]
            // },
            {
                title: 'emoji',  // tab 的标题
                type: 'emoji', // 'emoji' / 'image'
                // emoji 表情，content 是一个数组即可
                content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐'.split(/\s/),
            }
        ]
        editor.create()
        this.editor = editor
    },
    methods: {
        getEditorHtmlConetnt () {
            return this.editor.txt.html()
        },
        // 清空editor
        clearEditorContent () {
            this.editor.txt.clear()
        }
    }
}
</script>

<style>

</style>