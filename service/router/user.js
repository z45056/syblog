const express = require('express')

const router = express.Router()
const user = require('../controller/user.js')
// 用户登录
router.post('/login', user.login)
// 用户注册
router.post('/register', user.register)
// 更新用户
router.put('/update', user.update)
// 获取用户信息
router.get('/get_user_info', user.get_user_info)

module.exports = router