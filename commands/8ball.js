module.exports = {
	name: '8ball',
	description: 'Ask the omniscient bart',
	execute(message, args) {

		const Discord = require("discord.js");

		const fortunes = [
			"Fuck no",
			"...Maybe",
			"Why should I tell you",
			"Definitely",
			"How should I know",
			"Don't worry about it",
			"I guess",
			"Reply hazy. Try again"
		];

		const embed = new Discord.MessageEmbed()
			.setTitle("My sources say...")
			.setDescription(fortunes[Math.floor(Math.random() * fortunes.length)]);

		message.channel.send(embed);
	},
}