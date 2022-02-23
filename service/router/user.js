const express = require('express')
const router = express.Router()

router.get('/login', (req, res, next) => {
    const reslut = {
        msg: 'sucess',
        data: []
    }
    res.status(200).json(reslut)
})

module.exports = router