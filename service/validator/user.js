const Joi = require('joi')

const username = Joi.string().alphanum().min(5).max(30).required()
const password = Joi.string().alphanum().min(5).max(30).required()

exports.schema = Joi.object({
    username,
    password
})
// console.log(schema.object)
// console.log(schema.validate({ username: 'ab3124c', password: '2314199334' }))
