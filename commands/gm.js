module.exports = {
	name: 'gm',
	description: 'say good morning to bart',
	execute(message, args) {
const {nums} = require('../config.json');
		const messages = [
		"It is not a good morning.",
		"Which one of you little shits woke me up?!",
		"God is dead and I killed him. One of you are next.",
		];

        var Message = messages[Math.floor(Math.random() * messages.length * nums[Math.floor(Math.random())])];
        message.channel.send(Message);
	},
};