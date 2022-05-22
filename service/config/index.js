module.exports = {
    jwtSecretKey: 'sy-z',
    expiresIn: '10h',
    algorithms: ["HS256"],
    path: [
        '/api/register',
        '/api/login',
        '/favicon.ico'
    ] // 跳过路由验证
}