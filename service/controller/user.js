const pool = require('../model/index')
const postMailer = require('./postMailer')
const jwt = require('jsonwebtoken')
const config = require('../config/index')

// 用户登录
exports.login = async (req, res, next) => {
    const { username, password } = req.body
    try {
        const sql = `select * from users where username=?`
        pool.query(sql, username, (err, reslut) => {
            console.log(reslut)
            if (err) return res.cc(err)
            if (reslut.length !== 1) return res.cc('用户名或密码错误', 400)
            if (reslut[0].password !== password) return res.cc('密码错误', 400)
            reslut.forEach(item => {
                delete item.password
            });
            // 生成token
            const user = {...reslut[0], password: '', user_pic: ''}
            const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn})
            // 返回token
            reslut[0].token = 'Bearer ' + tokenStr
            res.cc('success', 200, reslut[0])
        })
    } catch (err) {
        next(err)
    }
}

// 注册
exports.resigter = async (req, res, next) => {
    const { username, password } = req.body
    console.log(req.body)
    try {
        const relpySql = `SELECT * FROM user where username='${username}'`
        const sql = `INSERT INTO user (username,password) values ('${username}', '${password}')`
        console.log(sql)
        pool.query(relpySql, (err, reslut) => {
            // console.log(reslut)
            if (reslut && reslut.length !== 0) {
                res.cc('该用户已存在', 403)
            } else {
                pool.query(sql, (err1, reslut1) => {
                    console.log(reslut1)
                    const Sql = `select * from user where id='${reslut1.insertId}'`
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
exports.get_user_info = (req, res, next) => {

}


