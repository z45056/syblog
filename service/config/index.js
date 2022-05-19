module.exports = {
    jwtSecretKey: 'sy-z',
    expiresIn: '10h',
    algorithms: ["HS256"],
    path: [
        '/api/login',
        '/my/userinfo'
    ] // 跳过路由验证
}