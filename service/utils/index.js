const db = require('../model/index')
const { get_query } = require('./generateQuery')
const query = {
    username: 'zhang',
    password: '123456'
}
db.query(get_query('select', query, 'users', '*'), (err, reslut) => {
    console.log(reslut, '00000')
})