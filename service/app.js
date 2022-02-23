const express = require('express')
const app = express()
app.use(require('./router'))
const port = 3000

app.listen(port, () => {
    console.log(`servcie start in ${port}`)
})