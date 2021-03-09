const fs = require('fs');
const Discord = require('discord.js');
const Reddit = require('reddit')
const { prefix, token, readyMessage } = require('./config.json');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const reddit = new Reddit({
    username: 'Imaginary_Purpose',
    password: 'joth*thai6GAUB!joor',
    appId: 'nOpVf2-8cwY2Aw',
    appSecret: 'hFg-BD8rE_AkEwnTz1VDEC0EEVcHVQ',
    userAgent: 'https://github.com/Siarune/Bartholomew'
  })

client.once('ready', () => {
    console.log(readyMessage);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
        console.log(command);
    } catch (error) {
        console.error(error);
        message.reply('Uh oh something did a fuckey wuckey.');
    }
});

client.login(token);