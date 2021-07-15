module.exports = {
    name: 'testrand',
    description: 'making a simple, unified randomization',
    execute(message, args) {
        const messages = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
        ];

        message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
    },
};