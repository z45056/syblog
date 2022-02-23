const express = require('express')
const router = express.Router()


// 用户
router.use(require('./user'))
module.exports = router