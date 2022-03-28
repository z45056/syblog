const { log } = require('console')
const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

// 处理send
app.use((req, res, next) => {
    res.cc = function (err, code, data = [], status = 1) {
        res.status(code).json({
            code,
            status,
            data,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

app.use(require('./router'))
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000

app.listen(port, () => {
    console.log(`servcie start in ${port}`)
})