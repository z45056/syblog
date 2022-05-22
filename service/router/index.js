const express = require('express')
const router = express.Router()


// 用户
router.use('/api', require('./user'))
router.use('/my', require('./user_info'))


module.exports = router