module.exports = {
	name: 'empty',
	description: 'description',
	execute(message, args) {
		//const {nums} = require('../config.json');
		const messages = [
		"msg1",
		"msg2",
		"msg3",
		"msg4",
		"msg5"
		];

       // var Message = messages[Math.floor(Math.random() * messages.length * nums[Math.floor(Math.random())])];
        message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
	},
};