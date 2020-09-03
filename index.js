const Discord = require("discord.js");
const config = require("./config.json");
const { Client, MessageAttachment } = require('discord.js');

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }

  else if (command === "avatar") {
      message.reply(message.author.displayAvatarURL({dynamic:true,size:4096}));
  }  

  else if (command === "smile") {
    const attachment = new MessageAttachment('https://i.pinimg.com/originals/0d/b5/eb/0db5eb21866e4e3063a2e2c85ca4e77c.jpg');
    message.channel.send(attachment);
  }  

  else if (command === "help") {
    message.reply(`
    !ping: returns ping
    !sum: sums up numbers provided
    !avatar: shows big avatar
    !smile: >:)`);
  }

  else {
    message.reply(`For all commands type !help`);
  }
});

client.login(config.BOT_TOKEN);