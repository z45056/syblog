const express = require('express')
const router = express.Router()


// 用户
router.use('/api', require('./user'))
router.use('/article', require('./article'))


module.exports = router