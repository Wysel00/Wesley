const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("This is the user info!")
		.setColor("#ff6600")
		.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
		.addField("Id", message.author.id)
		.addField("Created At", message.author.createdAt);
	message.channel.send(embed);
}

module.exports.help = {
	name: "userinfo"
}