module.exports = {
	name: 'emote',
	description: 'have Bart emote for you',
	execute(message, args) {
		const {nums} = require('../config.json');
		const messages = [
		"ᕦ(ò_óˇ)ᕤ",
		"୧( ಠ Д ಠ )୨",
		"ᕦ(ಠ_ಠ)ᕤ",
		"ᕙ[･□･]ᕗ",
		"(^._.^)ﾉ",
		"(╬⁽⁽ ⁰ ⁾⁾ Д ⁽⁽ ⁰ ⁾⁾)",
		"(ʘᗩʘ’)",
		"༼⁰o⁰；༽",
		"┐(´д`)┌",
		"─=≡Σ(╯°□°)╯︵┻┻",
		"(ノಠ益ಠ)ノ彡┻━┻",
		"(╯ರ ~ ರ)╯︵ ┻━┻",
		"ಠ_ಠ",
		"ಠ益ಠ",
		"(⌐■-■)",
		"ತ_ʖತ",
		"ರ╭╮ರ",
		"(눈‸눈)",
		"(ಠ_ಠ)━☆ﾟ.*･｡ﾟ",
		"༼;´༎ຶ O ༎ຶ༽",
		"(✧Д✧)→",
		"ԅ( ͒ □ ͒ )ᕤ",
		"☜ (↼_↼)",
		"(☞ ಠ_ಠ)☞",
		"(・_・;)",
		"(ʘ言ʘ╬)"		
		];


        // Now the randomMessage will be recalculated every time the command is run
        var randomMessage = messages[Math.floor(Math.random() * messages.length * nums[Math.floor(Math.random())])];
        message.channel.send(randomMessage);
	},
};