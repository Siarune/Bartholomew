module.exports = {
  name: 'imgtest',
  description: 'Test embedding images',
  execute(message, args) {
    const Discord = require('discord.js');
    const links =  [
        "https://i.imgur.com/gUFdCtK.jpg",
        "https://i.imgur.com/k213LHG.png",
        "https://i.imgur.com/Ip8Tyd2.png",
        "https://i.imgur.com/Nm4ZHTU.jpg"
        ];


        var link = links[Math.floor(Math.random() * links.length * process.env.modifier)];

      const embed = new Discord.MessageEmbed()

        .setTitle('title')
        .setImage(link);

message.channel.send(embed);

    },
};



/*
module.exports = {
  name: 'imgtest',
  description: 'Test embedding images',
  execute(message, args) {
      const Discord = require('discord.js');
      const embed1 = new Discord.MessageEmbed()
  
  .setTitle('Title')
  .setImage('https://i.imgur.com/gUFdCtK.jpg');


message.channel.send(embed1);

    },
};
*/