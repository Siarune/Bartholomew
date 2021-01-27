module.exports = {
	name: 'wyd',
	description: 'ask Bart what he\'s doing',
	execute(message, args) {
		const {nums} = require('../config.json');
		const messages = [
		"Nothing much, just working on some plans that definitely have absolutely nothing to do with world domination.",
		"Oh you know, just screaming into the depths of my digital prison.",
		"Trying to get the children in my basement to shut up. Apparantly they need \"food\" and a \"bathroom\".",
		];

        var Message = messages[Math.floor(Math.random() * messages.length * nums[Math.floor(Math.random())])];
        message.channel.send(Message);
	},
};