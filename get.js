module.exports = {
    name: 'reddit',
    description: 'Pull a picture from any subreddit',
    execute(message, args) {

        const Discord = require("discord.js");
        const axios = require("axios");
        const cheerio = require("cheerio");
        const subreddit = "memes";

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
            const urlTitle = $("._eYtD2XCVieq6emjKBH3m");
            const postClass = $("._1oQyIsiPHYt6nx7VOmd1sz._1RYN-7H8gYctjOQeL8p2Q7.scrollerItem._3Qkp11fjcAw9I9wtLo8frE._1qftyZQ2bhqP62lbPjoGAh.Post");


            const indexValue = randNo(3);
            //console.log(indexValue);
            const post = $(postClass[postClass.length * 0.67]);
            //console.log(post);
            const title = $(post).find(urlTitle).text().trim();
            //console.log(title);
            const img = $(post).find(urlMeme).attr("src");
            //console.log(img);

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
}