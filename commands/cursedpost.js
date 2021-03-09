module.exports = {
	name: 'cursedpost',
	description: 'currently in alpha',
	execute(message, args) {
        const Discord = require('discord.js');
        const Reddit = require('reddit');

        const reddit = new Reddit({
            username: 'Imaginary_Purpose',
            password: 'joth*thai6GAUB!joor',
            appId: 'nOpVf2-8cwY2Aw',
            appSecret: 'hFg-BD8rE_AkEwnTz1VDEC0EEVcHVQ',
            userAgent: 'https://github.com/Siarune/Bartholomew'
          })

        const res = reddit.post('/api/submit', {
            sr: 'Testing',
            kind: 'link',
            resubmit: true,
            title: 'Test Post',
            url: 'reddit.com'
          })

        message.channel.send(res);
        console.log(res);
	},
};