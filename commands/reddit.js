// Version 1.0
/*
module.exports = {
	name: 'reddit',
	description: 'Pull a picture from any subreddit',
	execute(message, args) {

		const Discord = require("discord.js");
		const axios = require("axios");
		const cheerio = require("cheerio");
		const subreddit = args;

		axios
			.get(`https://reddit.com/r/` + subreddit)
			.then((response) => {
				dealWithData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});

		const dealWithData = (html) => {
			const $ = cheerio.load(html);
			const urlMeme = $("._2_tDEnGMLxpM6uOa2kaDB3.ImageBox-image.media-element._1XWObl-3b9tPy64oaG6fax");
			const urlTitle = $("._2SdHzo12ISmrC8H86TgSCp._3wqmjmv3tb_k-PROt7qFZe ");
			const postClass = $("._1oQyIsiPHYt6nx7VOmd1sz._1RYN-7H8gYctjOQeL8p2Q7.scrollerItem._3Qkp11fjcAw9I9wtLo8frE._1qftyZQ2bhqP62lbPjoGAh.Post.t3_omudhx");


			const indexValue = randNo(urlMeme.length * 0.67);
			const img = `${urlMeme[indexValue].attribs.src}`;
			const title = $(urlTitle[indexValue + 2]).text(); //Need to make a dynamic offset because of pins

			const Embed = new Discord.MessageEmbed()
				.setTitle(title)
				.setColor("#042069")
				//.setImage(img);

			message.channel.send(Embed);

		};

		const randNo = (limit) => {
			const thatNo = Math.floor(Math.random() * limit);
			return thatNo;
		};
	},
};
*/

//Version 2.0

module.exports = {
	name: 'reddit',
	description: 'Pull a picture from any subreddit',
	execute(message, args) {

		const Discord = require("discord.js");
		const axios = require("axios");
		const cheerio = require("cheerio");
		const subreddit = args;

		axios
			.get(`https://reddit.com/r/` + subreddit)
			.then((response) => {
				dealWithData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});

		const dealWithData = (html) => {
			const $ = cheerio.load(html);

			const thumbnailClass = $(".Mh_Wl6YioFfBc9O1SQ4Jp");
			const postClass = $("._1oQyIsiPHYt6nx7VOmd1sz._1RYN-7H8gYctjOQeL8p2Q7.scrollerItem._3Qkp11fjcAw9I9wtLo8frE._1qftyZQ2bhqP62lbPjoGAh.Post");
			const titleClass = $("._eYtD2XCVieq6emjKBH3m");
			const imgClass = $("._2_tDEnGMLxpM6uOa2kaDB3.ImageBox-image.media-element._1XWObl-3b9tPy64oaG6fax");
			const authorClass = $("._2mHuuvyV9doV3zwbZPtIPG");
			const timeClass = $("._3jOxDPIQ0KaOWpzvSQo-1s");

			const indexValue = randNo(postClass.length * 0.67);
			const post = $(postClass[indexValue]);
			const title = $(post).find(titleClass).text().trim();
			const img = $(post).find(imgClass).attr("src");
			const author = $(post).find(authorClass).text();
			const time = $(post).find(timeClass).text();
			const thumbnail = $(thumbnailClass).attr("src");

			const Embed = new Discord.MessageEmbed()
				.setTitle("Here's you meme")
				.setThumbnail(thumbnail)
				.setDescription(title)
				.setColor("#042069")
				.setImage(img)
				.setFooter(author);

			message.channel.send(Embed);
		};

		const randNo = (limit) => {
			const thatNo = Math.floor(Math.random() * limit);
			return thatNo;
		};
	},
};