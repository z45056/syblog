module.exports = {
    jwtSecretKey: 'sy-z',
    expiresIn: '10h',
    algorithms: ["HS256"],
    path: [
        '/api/register',
        '/api/login',
        '/favicon.ico'
    ], // 跳过路由验证
    // 白名单
    whileList: [
        'http://114.132.201.39.com',
        'http://learnnewthings.xyz'
    ]
}