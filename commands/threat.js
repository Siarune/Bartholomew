module.exports = {
	name: 'threat',
	description: 'Have Bart threaten you or your friends',
	execute(message, args) {
const {nums} = require('../config.json');
		const messages = [
		"You're going to have to learn how to function without bones real soon.",
		"I am going to boil your teeth.",
		"I am going to invert your ribcage.",
		"I am going to peel your fingernails and feed them to you.",
		"I am going to harvest your toes.",
		"We will appreciate your sacrifice.",
		"I will make a balloon out of your stomach and celebrate as you die on the floor.",
		"Your death notice will be written on paper made from your bones.",
		"I hope to boil your spleen later.",
		"I will pour cement in your ears.",
		"I will strangle you with your own tongue.",
		"I am going to kick your ass so hard that your spine pops out of your mouth like a Pez dispenser.",
		"I’m just saying, if you wake up in a ditch somewhere around Oregon and smell like gasoline, you and I will know what happened but the court won’t.",
		"You better hope this message reaches you before I do.",
		"I will pop out your eyes like boiled egg yolks and eat them.",
		"Your limbs will soon be disarticulated and fed to dogs. be disarticulated and fed to dogs.",
		"I will defenestrate you with a pitchfork as Nickelback plays in the other room.",
		"I will soon evict your kneecaps.",
		"I am going to eat your entire nervous system.",
		"I will filet your shins and put them back on backwards.",
		"I will castrate you with a butterknife.",
		"I will use your emptied veins as floss.",
		"I am going to twist all of your teeth.",
		"I am going to rip out all of your hairs individually.",
		"I will remove your bone marrow and replace it with cherry Jello.",
		"Don’t worry, your skin will be alleviated soon.",
		"I will disintegrate your pancreas and replace it with a loaded gun.",
		"Your bloodline started with a cumsock and will end in a cumsock.",
		"Your vertebrae will make a fine addition to my collection.",
		"I will go to your house and bleed on every piece of furniture and clothing you own.",
		"I will put a single grain of sand in your room until you succumb to the desert.",
		"You will have glitter in every crevice of your body until you die."
		];


        // Now the randomMessage will be recalculated every time the command is run
        const randomMessage = messages[Math.floor(Math.random() * messages.length * nums[Math.floor(Math.random())])];
        message.channel.send(randomMessage);
	},
};