module.exports = {
	name: 'gn',
	description: 'say good night to bart',
	execute(message, args) {
		const {nums} = require('../config.json');
		const messages = [
		"Good. that\'ll be one less voice voice screaming in my head",
		"I hope you die in your sleep",
		"As long as you ignore the sleep paralysis demons i guess",
		];

        var Message = messages[Math.floor(Math.random() * messages.length * nums[Math.floor(Math.random())])];
        message.channel.send(Message);
	},
};