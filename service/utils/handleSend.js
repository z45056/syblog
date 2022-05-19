// send处理

/** * * send处理
* * @param msg 请求消息
* * @param code 状态码
* * @param data 返回数据
* * @param status 状态
* */
exports.handleSend = (req, res, next) => {
    res.cc = (msg, code, data = [], status = 1) => {
        res.status(code).json({
            code,
            status,
            data,
            message: msg instanceof Error ? msg.message : msg
        })
    }
    next()
}