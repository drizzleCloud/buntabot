const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const fs = require('fs');

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
    const attachment = new Discord.MessageAttachment('https://i.pinimg.com/originals/0d/b5/eb/0db5eb21866e4e3063a2e2c85ca4e77c.jpg');
    message.channel.send(attachment);
  }  

  else if (command === "smug") {
    const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/457008618110451722/745677591855366174/eeveewatersmug.png');
    message.channel.send(attachment);
  }  



  else if (command === "gorilla") {
    const attachment = new Discord.MessageAttachment('https://dpatlarge.files.wordpress.com/2013/10/just-gorillas-havin-fun.gif?w=584');
    message.channel.send(attachment);
  }  

  else if (message.content === '!memes') {
    // Get the buffer from the 'memes.txt', assuming that the file exists
    const buffer = fs.readFileSync('./memes.txt');

    /**
     * Create the attachment using MessageAttachment,
     * overwritting the default file name to 'memes.txt'
     * Read more about it over at
     * http://discord.js.org/#/docs/main/master/class/MessageAttachment
     */
    const attachment = new Discord.MessageAttachment(buffer, 'memes.txt');
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author}, here are your memes!`, attachment);
  }


  else if (command === "help") {
    message.reply(`
    !ping: returns ping
    !sum: sums up numbers provided
    !avatar: shows big avatar
    !smile: >:)
    !smug: water stone
    !help: display all current commmands
    gorilla`);
  }

  else {
    message.reply(`For all commands type !help`);
  }
});

client.login(config.BOT_TOKEN);