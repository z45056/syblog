/* 发送邮件 */
const nodeMailer = require('nodemailer')

exports.sendMail = (Email, content) => {

    const transPoster = nodeMailer.createTransport({
        service: 'QQ',
        auth: {
            user: '1943700178@qq.com',
            pass: '' // 邮箱stmp密钥
        }
    })

    const receiver = {
        from: `zhang<1943700178@qq.com>`,
        subject: '测试邮件发送验证码',
        to: Email,
        html: `<h2>验证码：${ content }(5分钟后失效😁😁😁)</h2>`
    }

    transPoster.sendMail(receiver, (error, info) => {
        if (error) {
            return console.log('发送失败')
        }
        console.log(info)
        transPoster.close
        console.log('发送成功')
    })
}