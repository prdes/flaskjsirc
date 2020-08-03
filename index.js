let express = require('express')
let app = express()
let port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http:/localhost:${port}`)
})

app.set('view engine', 'pug')

app.get('/new', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })