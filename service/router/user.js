const express = require('express')

const joi = require('joi')
const router = express.Router()
const user = require('../controller/user.js')
// 用户登录
router.post('/login', user.login)
// 用户注册
router.post('/resigter', user.resigter)
// 更新用户
router.put('/update', user.update)

module.exports = router