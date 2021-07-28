module.exports = (client) => {
    const welcomeChannel = process.env.WELCOMECHANNEL;
    client.on("guildMemberAdd", (member) => {

        console.log("New moron here");

        const message = `Welcome <@${member.id}> to our mental support hellserver!`;
        const channel = member.guild.channels.cache.get(welcomeChannel);

        channel.send(message);
    });

    client.on("guildMemberRemove", (member) => {

        console.log("Some moron left");

        const message = `Goodbye <@${member.id}>, and good riddance!`;
        const channel = member.guild.channels.cache.get(welcomeChannel);

        channel.send(message);
        
    });
};