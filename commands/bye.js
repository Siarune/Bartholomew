module.exports = {
	name: 'bye',
	description: 'say bye to bart',
	execute(message, args) {

        message.channel.send('good riddance');
	},
};