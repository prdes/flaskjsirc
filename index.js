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

app.get('/register', function (req, res) {
    res.render('register', { title: 'Register', message: 'Registration' })
  })
app.get('/verify', function (req, res) {
res.render('verify', { title: 'Verify', message: 'Verification' })
})