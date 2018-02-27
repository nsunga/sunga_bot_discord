const Discord = require('discord.js');
const Urban_Dictionary = require('urban-dictionary.js')
const secrets = require('secrets.js');
const sunga_bot = new Discord.Client();
const prefix = 'sunga';

sunga_bot.on('ready', () => {
  console.log(`Logged in as ${sunga_bot.user.tag}!`);
});

sunga_bot.on('message', message => {
  if (message.content.startsWith('sunga')) {
    message.channel.send('beep boop');
  }
});

sunga_bot.login(process.env.TOKEN);
