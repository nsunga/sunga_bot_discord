/*eslint no-console: ["warn", { allow: ["warn", "error"] }] */

const Discord = require('discord.js');
const Urban_Dictionary = require('urban-dictionary/urban-dictionary');
const sunga_bot = new Discord.Client();
const prefix = 'sunga';

sunga_bot.on('ready', () => {
  console.log(`Logged in as ${sunga_bot.user.tag}!`);
});

sunga_bot.on('message', (message) => {
  if (message.content === 'sunga') {
    message.channel.send('beep boop');
  }
  if (message.content === 'sunga <urban_random>') {
    Urban_Dictionary.random(function (error, entry) {
      if (error) {
        console.error(error.message);
      } else {
        console.log(entry.word);
        console.log(entry.definition);
        console.log(entry.example);
        message.channel.send('```' + entry.word + ':\n' + entry.definition + '```');
        // message.channel.send(entry.definition + '\n```');
      }
    });
  }
  // if (message.content === 'sunga <urban_term>')
});

sunga_bot.on('message', message => {
  if (message.content.startsWith('urban')) {

    message.channel.send(Urban_Dictionary.random());
  }
});

sunga_bot.login(process.env.TOKEN);
