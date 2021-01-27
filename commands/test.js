module.exports = {
	name: 'test',
	description: 'Test basic command handling.',
	execute(message) {
		message.channel.send('Test');
	},
};