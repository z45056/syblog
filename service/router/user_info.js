const express = require('express')
const router = express.Router()

// 个人中心
router.get('/userinfo', (req, res) => {
    res.send('ok')
})








module.exports = router