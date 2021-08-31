module.exports = {
	name: 'reddit',
	description: 'Pull a picture from any subreddit',
	execute(message, args) {

		const Discord = require("discord.js");
		const fetch = (...args) => import('node-fetch').then(({
			default: fetch
		}) => fetch(...args));
		const linkBase = "https://www.reddit.com/r/"
		

		const get = () => {
			fetch(linkBase + args + "/hot.json")
				.then(function (res) {
					return res.json(); // Convert the data into JSON
				})
				.then(function (res) {
					let i = 0;
					let postsArr = res.data.children;
					let currPost = postsArr[i].data;
					let img = "hi";
					shift();
					media();

					function shift() {
						if (currPost.stickied == true || currPost.is_created_from_ads_ui == true) {
							i++;
							currPost = postsArr[i].data;
							shift();
						} else {
							return;
						}
					}

					function media() {
						if (!currPost.secure_media || currPost.secure_media == null) {
							return;
						} else {
							img = currPost.secure_media.reddit_video.scrubber_media_url;
							console.log(img);
						}
					}

					const title = currPost.title;
					const text = currPost.selftext;
					const author = currPost.author;
					const link = currPost.permalink;
					const sub = currPost.subreddit;
					const upvotes = currPost.ups;
					const downvotes = currPost.downs;
					const awards = currPost.total_awards_received;

					const Embed = new Discord.MessageEmbed()
						.setTitle(title)
						.setURL("https://reddit.com" + link)
						//.setThumbnail(thumbnail)
						.setDescription(text)
						.setColor("#042069")
						//.setImage(img)
						.setFooter("Posted by " + author + " on " + sub);

					message.channel.send(Embed);
				})
				.catch(function (err) {
					console.log(err); // Log error if any
				});
				
		}
get();
	},
};