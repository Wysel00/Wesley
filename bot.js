const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.lenght <= 0) {
		console.log("No commands to load!");
		return;
	}

	console.log(`loading ${jsfiles.lenght} commands!`);

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i + 1}: ${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

bot.on("ready", () => {
	console.log(`${bot.user.username} bot is ready!`);
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if(!command.startsWith(prefix)) return;

	let cmd = bot.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(bot, message, args);

	//console.log(`${message.author.username}#${message.author.discriminator} usou ${message.content}`);

	//let cmd = bot.commands.get(command.slice(prefix.lenght));	

	//if(cmd) cmd.run(bot, message, args);

	// if(command === `${prefix}userinfo`){
	// 	let embed = new Discord.RichEmbed()
	// 		.setAuthor(message.author.username)
	// 		.setDescription("This is the user info!")
	// 		.setColor("#9B59B6")
	// 		.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
	// 		.addField("Id", message.author.id)
	// 		.addField("Created At", message.author.createdAt);
	// 	message.channel.send(embed);
	// 	return;
	// }

	// if(command === `${prefix}mute`){
	// 	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have manage messages.");

	// 	let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	// 	if(!toMute) return message.channel.send("You did not specify a user mention or ID");
		
	// 	let role = message.guild.roles.find(r => r.name === "SADB Muted");
	// 	if (!role) {
	// 		try{
	// 			let role = await message.guild.createRole({
	// 				name: "SABD Muted",
	// 				color: "#000000",
	// 				permissions: []
	// 			});

	// 			message.guild.channels.forEach(async (channel, id) => {
	// 				await channel.overwritePermissions(role, {
	// 					SEND_MESSAGES: false,
	// 					ADD_REACTIONS: false
	// 				});
	// 			});
	// 		} catch(e) {
	// 			console.log(e.stack);
	// 		}
	// 	}		
	// 	if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");
		
	// 	await tomute.addRole(role);

	// 	message.channel.send("I have muted them.");

	// 	return;
	// }
});
  
bot.login(botSettings.token);