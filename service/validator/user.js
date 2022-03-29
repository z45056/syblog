const joi = require('joi')

const login = {
    body: {
        username: joi.string().alphanum().min(5).max(12).required(),
        password: joi.string().alphanum().min(5).max(12).required(),
    }
}