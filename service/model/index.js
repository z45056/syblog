var mysql = require('mysql')
var pool = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'zhang123456',
    database: 'manage'
})
pool.connect(function (err) {
    if (err) throw err;
    console.log('数据库连接成功');
});

module.exports = pool