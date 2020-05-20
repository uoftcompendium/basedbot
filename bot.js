const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'cope') {
       message.channel.send("cope " + message.author);
       }
     if (message.content === 'cringe') {
       message.channel.send("https://cdn.discordapp.com/attachments/701688940465225829/712796621137772654/SPOILER_SPOILER_1589297889284.jpg");
       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
