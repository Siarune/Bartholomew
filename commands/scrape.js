module.exports = {
  name: "scrape",
  description: "Test basic reddit scraping",
  execute(message) {
    const Discord = require("discord.js");
    const axios = require("axios");
    const cheerio = require("cheerio");
    const mainUrl = `https://reddit.com/r/dankmemes`;

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
      //console.log(`Source is:\n${urlMeme[indexValue].attribs.src}`);
      var source = `${urlMeme[indexValue].attribs.src}`;

      const Embed = new Discord.MessageEmbed()
      .setTitle("Dank Meme")
      .setImage(source);
  
      message.channel.send(Embed);
    };

    const randNo = (limit) => {
      const thatNo = Math.floor(Math.random() * limit);
      return thatNo;
    };

  },
};