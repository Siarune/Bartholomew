
module.exports = {
	name: 'purge',
	description: 'Delete a bunch of messages',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that\'s not a number, idiot. ');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('needs to be between 1 and 99 dummy');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('something went wrong but i dont really give a fuck');
		});
	},
};