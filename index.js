'use strict';

const IRC = require('irc-framework');


let express = require('express')
let app = express()
let port = 3000

app.use(express.urlencoded({ extended: true })); // Parses JSON in req.body

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

app.post('/register', function (req, res) {
    let bot = new IRC.Client();

    bot.use(function (client, rawEvents, parsedEvents) { 
        parsedEvents.use(function (command, event, client, next) {
            console.log(event);
            next();
        }); 
    });

    bot.on('registered', function ({ client }) {
        client.say('nickserv', `register ${req.body.password} ${req.body.email}`);
    });

    bot.connect({
        host: 'irc.liberta.casa',
        port: 6697,
        nick: req.body.username,
    });

    console.log("Client Connected");
    console.log(bot)
    // const ircClient = new Client({ encoding: 'utf-8' });
    // const ircClient.use(); // Use middleware to registr
  });



app.get('/verify', function (req, res) {
res.render('verify', { title: 'Verify', message: 'Verification' })
})