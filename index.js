const Discord = require("discord.js");
const config = require("./config.json");

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
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`); 
  }
  
  else if (command === "avatar") {
    message.reply(message.author.displayAvatarURL({dynamic:true,size:4096}));
  }  

  else if (command === "smile") {
    const attachment = new Discord.MessageAttachment(
      'https://cdn.discordapp.com/attachments/750847967430443050/751468088305909841/0db5eb21866e4e3063a2e2c85ca4e77c.jpg');
    message.reply(attachment);
  }  

  else if (command === "ps5") {
    const attachment = new Discord.MessageAttachment(
      'https://cdn.discordapp.com/attachments/750847967430443050/751469661924884561/tenor.gif');
    message.reply(attachment);
  }  

  else if (command == 'ht') {
    const acceptedReplies = ['h', 't'];
    const random = Math.floor((Math.random() * acceptedReplies.length));
    const result = acceptedReplies[random];
    const choice = args[0];
    const hcembed = {
      color: 7584788,
      description: 'Correct',
      image: {
        url: 'https://cdn.discordapp.com/attachments/750847967430443050/751493440193167431/heads.png',
      },
    };
    const hwembed = {
      color: 7584788,
      description: 'Wrong',
      image: {
        url: 'https://cdn.discordapp.com/attachments/750847967430443050/751493440193167431/heads.png',
      },
    };
    const tcembed = {
      color: 7584788,
      description: 'Correct',
      image: {
        url: 'https://cdn.discordapp.com/attachments/750847967430443050/751493350548307988/tails.png',
      },
    };
    const twembed = {
      color: 7584788,
      description: 'Wrong',
      image: {
        url: 'https://cdn.discordapp.com/attachments/750847967430443050/751493350548307988/tails.png',
      },
    };

    if (!choice) return message.channel.send(`How to play: \`${prefix}bf <h> Heads, <t> Tails\``);
    if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
    
    if (result == choice) { //correct
      if (result == 'h'){ //heads
          message.channel.send({ embed: hcembed });
      }
      else if (result == 't'){ //tails
          message.channel.send({ embed: tcembed });
      }
    }
    else if (result != choice){ //wrong
      if (result == 'h'){ //heads
          message.channel.send({ embed: hwembed });
      }
      else if (result == 't'){ //tails
          message.channel.send({ embed: twembed });
      }
    }
  }
  
  else {
    message.reply(`
    !ping
    !avatar
    !smile
    !ps5
    !ht`);
  }
});

client.login(config.BOT_TOKEN);