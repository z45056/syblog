const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
// 解析token
var { expressjwt: jwt } = require("express-jwt")
const config = require('./config/index')
app.use(express.json())
app.use(jwt({
    // 签名的密钥 或 PublicKey
    secret: config.jwtSecretKey,
    algorithms: config.algorithms
}).unless({
    // 指定路径不经过 Token 解析
    path: config.path
}))
// const whiteList = ['http://114.132.201.39.com', 'http://learnnewthings.xyz'] // 请求白名单

// app.use(cors({
//     origin: (origin, callback) => {
//         if (whiteList.indexOf(origin) !== -1) return callback(null, true)
//         callback(new Error('Not allowed by CORS'))
//     }
// }))
app.use(morgan('dev'))
const { handleSend } = require('./utils/handleSend')
app.use(handleSend)
app.use(require('./router'))
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000

app.listen(port, () => {
    console.log(`servcie start in ${port}`)
})