const pool = require('../model/index')
const postMailer = require('./postMailer')
// 用户登录
exports.login = async (req, res, next) => {
    const { username, password } = req.body
    try {
        const sql = `select username,password from users where username in ('${username}') and password in ('${password}')`
        pool.query(sql, (err, reslut) => {
            console.log(reslut)
            if (reslut && reslut.length === 0) {
                return res.status(401).json({
                    status: false,
                    code: 1,
                    message: '用户名或密码错误'
                })
            } else {
                reslut.forEach(item => {
                    delete item.password
                });
                const ressql = {
                    code: 0,
                    status: 'success',
                    data: reslut
                }
                res.status(200).json(ressql)
            }
        })
    } catch (err) {
        next(err)
    }
}
// 注册
exports.resigter = async (req, res, next) => {
    const { username, password } = req.body
    try {
        const relpySql = `select * from users where username='${username}'`
        const sql = `insert into users (username,password) values ('${username}', '${password}')`
        pool.query(relpySql, (err, reslut) => {
            if (reslut.length !== 0) {
                res.cc('该用户已存在', 203)
            } else {
                pool.query(sql, (err1, reslut1) => {
                    const Sql = `select * from users where id='${reslut1.insertId}'`
                    pool.query(Sql, (err2, reslut2) => {
                        reslut2.forEach(item => {
                            delete item.password
                        });
                        res.status(200).json({
                            code: 0,
                            status: 'success',
                            data: reslut2
                        })
                    })
                })
            }
        })
    } catch (err) {
        next(err)
    }
}
// 更新用户
exports.update = async (req, res, next) => {
    try {
        postMailer.sendMail('1440372837@qq.com', '哈哈哈')
        const reslut = {
            msg: 'update sucess',
            data: []
        }
        res.status(200).json(reslut)
    } catch (err) {
        next(err)
    }
}


