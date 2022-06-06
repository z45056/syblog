const express = require('express')
const router = express.Router()
const article = require('../controller/article.js')

// 获取列表
router.get('/list', (req, res) => {
    res.send('ok')
})
// 获取article详情
router.get('/details', (req, res) => {
    res.send('ok')
})
// 获取列表
router.get('/details/comment', (req, res) => {
    res.send('ok')
})
// 创建article
router.post('/create', (req, res) => {
    res.send('ok')
})
// 保存草稿
router.post('/list', (req, res) => {
    res.send('ok')
})
// 删除article
router.get('/list', (req, res) => {
    res.send('ok')
})









module.exports = router