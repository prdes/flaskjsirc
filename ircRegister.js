
function ircRegister(username, password, email) {
    var bot = new IRC.Client();
    bot.connect({
        host: 'localhost',
        port: 6667,
        nick: username
    });
    bot.on('message', function(event) {
        if (event.message.indexOf('hello') === 0) {
                event.reply('Hi!');
        };
    });
};

