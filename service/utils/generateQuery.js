// const db = require('../model/index')
// 生成query_string
exports.get_query = (type, query, form_name, field = '*') => {
    const key_list = []
    const value_list = []
    Object.keys(query).map(item => {
        key_list.push(item)
        value_list.push(query[item])
    })
    console.log(key_list, value_list)
    let t = ''
    switch (type.toUpperCase()) {
        case 'SELECT':
            console.log(type, query)
            t = `SELECT * FROM ${form_name}`
            break;
        case 'INSERT':
            console.log(type, query)
            break;
        case 'UPDATE':
            console.log(type, query)
            break;
        case 'DELETE':
            console.log(type, query)
            break;
    }
    console.log(t)
    return t
}