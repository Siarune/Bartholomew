require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const welcome = require('./welcome.js')

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(process.env.READYMESSAGE);
  welcome(client);

  client.user.setPresence({
      activity: {
        name: 'Go Fuck Yoself'
      },
      status: 'online'
    })
    .catch(console.error);
});

client.on('message', message => {
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
    console.log(command, args);
  } catch (error) {
    console.error(error);
    message.reply(process.env.ERRORMESSAGE);
  }
});

/*
const welcomeChannel = process.env.WELCOMECHANNEL;
client.on("guildMemberAdd", (member) => {

    console.log("New moron here");

    const message = `Welcome <@${member.id}> to our mental support hellserver!`;
    const channel = member.guild.channels.cache.get(welcomeChannel);

    channel.send(message);
});

client.on("guildMemberRemove", (member) => {

    console.log("Some moron left");

    const message = `Goodbye <@${member.id}>, and good riddance!`;
    const channel = member.guild.channels.cache.get(welcomeChannel);

    channel.send(message);
    
});
*/

client.login();
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));