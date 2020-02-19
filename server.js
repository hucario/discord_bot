const Discord = require('discord.js');
const client = new Discord.Client();
var debugChannel = '679494924265455621';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.get(debugChannel).send('I RISE')
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
	client.channels.get(debugChannel).send('Caught exception: '+err)
});

client.login(process.env.TOKEN);

process.on('exit', (code) => {
    client.channels.get(debugChannel).send('I\'m dead. Reason:\n'+code)

});

client.on('message', msg => { 
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
    if (msg.content == 'crash') {
        undefinedFunction();
    }
  });

 require('http').createServer(function (request, response) {
		response.writeHead(404);
		response.end();
 }).listen(process.env.PORT);

 console.log(`Bound to port ${process.env.PORT} so that Heroku won't shut the app down.`);
