const Discord = require('discord.js');
const client = new Discord.Client();
var debugChannel = '679494924265455621';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.get(debugChannel).send('I RISE')
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
        asdfe;
    }
  });
