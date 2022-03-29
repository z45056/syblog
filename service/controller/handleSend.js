// send处理
exports.handle = (req, res, next) => {
    res.ERROR = (err, status = 1, data = []) => {
        res.status(200).json({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
}