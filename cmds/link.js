module.exports.run = async (bot, message, args) => {
	try {
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		//console.log(link);
		await message.channel.send(link);
	} catch(e) {
		console.log(e.stack)
	}
}

module.exports.help = {
	name: "link"
}