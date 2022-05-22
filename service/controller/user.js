const pool = require('../model/index')
const postMailer = require('./postMailer')
const jwt = require('jsonwebtoken')
const config = require('../config/index')
const bcrypt = require('bcrypt')

// 用户登录
exports.login = async (req, res, next) => {
    const { username, password } = req.body
    try {
        const sql = `select * from users where username=?`
        pool.query(sql, username, (err, reslut) => {
            console.log(reslut)
            if (err) return res.cc(err)
            if (reslut.length !== 1) return res.cc('用户名或密码错误', 400)
            // 判断密码是否一致
            const _password = bcrypt.compareSync(password, reslut[0].password)
            if (!_password) return res.cc('密码错误', 400)
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
exports.register = async (req, res, next) => {
    const { username, password } = req.body
    try {
        // 查询是否重复username
        const relpySql = `SELECT * FROM users where username=?`
        pool.query(relpySql, username, (err, reslut) => {
            if (err) {
                return res.cc('查询失败', 403)
            }
            if (reslut.length > 0) {
                return res.cc('该用户已存在', 403)
            }
            req.body.password = bcrypt.hashSync(password, 10)
            const str = `INSERT INTO users SET ?`
            pool.query(str, req.body, (err, result) => {
                if (err) return res.cc('注册失败', 403, err)
                if (result.affectedRows === 1) {
                    res.status(200).json({
                        code: 0,
                        status: 'success',
                        data: {
                            message: '注册成功'
                        }
                    })
                }
            })
        })
        // const sql = `INSERT INTO user (username,password) values ('${username}', '${password}')`
        // console.log(sql)
        // pool.query(relpySql, (err, reslut) => {
        //     // console.log(reslut)
        //     if (reslut && reslut.length !== 0) {
        //         res.cc('该用户已存在', 403)
        //     } else {
        //         pool.query(sql, (err1, reslut1) => {
        //             console.log(reslut1)
        //             const Sql = `select * from user where id='${reslut1.insertId}'`
        //             pool.query(Sql, (err2, reslut2) => {
        //                 reslut2.forEach(item => {
        //                     delete item.password
        //                 });
        //                 res.status(200).json({
        //                     code: 0,
        //                     status: 'success',
        //                     data: reslut2
        //                 })
        //             })
        //         })
        //     }
        // })
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

// 获取用户信息
// 通过jwt token 获取id
exports.get_user_info = (req, res, next) => {
    const sql = `SELECT id, username,status, auth, update_time, user_pic, sex, nick_name, signature, email, birthday FROM users WHERE id=?`
    pool.query(sql, req.auth.id, (err, reslut) => {
        if (err) return res.cc(err)
        if (reslut.length !== 1) return res.cc('用户名或密码错误', 400)
        res.cc('success', 200, reslut[0])
    })
}


