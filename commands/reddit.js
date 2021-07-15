module.exports = {
	name: 'reddit',
	description: 'Pull a picture from any subreddit',
	execute(message, args) {

		const Discord = require("discord.js");
		const axios = require("axios");
		const cheerio = require("cheerio");
		const mainUrl = `https://reddit.com/r/` + args;

		axios
			.get(mainUrl)
			.then((response) => {
				dealWithData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});

		const dealWithData = (html) => {
			const $ = cheerio.load(html);
			const urlMeme = $(
				"._2_tDEnGMLxpM6uOa2kaDB3.ImageBox-image.media-element._1XWObl-3b9tPy64oaG6fax"
			);
			const indexValue = randNo(urlMeme.length * 0.67);
			var source = `${urlMeme[indexValue].attribs.src}`;

			const Embed = new Discord.MessageEmbed()
				.setTitle("Here's your pic")
				.setColor("#042069")
				.setImage(source);

			message.channel.send(Embed);
		};

		const randNo = (limit) => {
			const thatNo = Math.floor(Math.random() * limit);
			return thatNo;
		};

	},
};