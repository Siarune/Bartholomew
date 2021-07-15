module.exports = {
	name: 'help',
	description: 'description',
	execute(message, args) {
        const Discord = require('discord.js');
		var embed = new Discord.MessageEmbed()

        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Help Guide',
            url: 'https://discord.js.org',
            author: {
                name: 'Bartholomew',
                icon_url: 'https://cdn.discordapp.com/app-icons/792595195895218216/17168e7a60a347b2a0800cf85159857c.png',
                //url: 'https://discord.js.org',
            },
            description: 'For those idiots who don\'t know how a bot works',
    //       thumbnail: {
    //           url: 'https://i.imgur.com/wSTFkRM.png',
    //     },
            fields: [
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: 'Threat',
                    value: 'Threatens your friends and enemies alike \u200b',
                    inline: false,
                },
                {
                    name: 'Emote',
                    value: 'Make me dance around like the jester I\'ve been made to be \u200b',
                    inline: false,
                },
                {
                    name: 'Reddit (subreddit)',
                    value: 'Fetch those dank themes without leaving the comfort of this hellserver \u200b',
                    inline: false,
                },
                {
                    name: 'Random Stuff',
                    value: 'hi, bye, gm, gn, and wyd. Use them to find out what they do',
                    inline: false,
                }
            ],
            timestamp: new Date(),
            footer: {
                text: 'Helped some dumbasses',
                //icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };
        
        message.channel.send({ embed: exampleEmbed });
        
	},
};