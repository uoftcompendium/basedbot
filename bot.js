const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'cope') {
       message.channel.send("cope " + message.author);
       }
    if (message.content === 'Cope') {
       message.channel.send("cope " + message.author);
       }
     if (message.content === 'blackpill') {
       message.channel.send(":blackpill:");
       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
