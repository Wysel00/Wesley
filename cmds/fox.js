//"https://war-service-live.foxholeservices.com/api/worldconquest/maps";
//"https://war-service-live.foxholeservices.com/api/worldconquest/maps/Deadlands/dynamic/public";
//"https://war-service-live.foxholeservices.com/api/worldconquest/maps/deadlands/static";

const mapList = ["westgate", "upperheartlands", "umbralwildWood",
				"farranaccoast", "deadlands", "endlessshore",
				"callahanspassage", "mooringcounty", "weatheredexpanse"];

module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Gerando mapa... ");

	let mapLink = "http://www.foxholestats.com/images/cache/";
	let mapId = String(args[0])

	console.log(mapId);

	console.log("westgate".indexOf(mapId));

	switch(true) {
		case "westgate".indexOf(mapId) >= 0:
		case mapId === "1":
			msg.edit(msg + " Westgate");
			mapLink = mapLink + mapList[0];
			break;
		case "upperheartlands".indexOf(mapId) >= 0:
		case mapId === "2":
			msg.edit(msg + " Upper Heartlands");
			mapLink = mapLink + mapList[1];
			break;
		case "umbralwildWood".indexOf(mapId) >= 0:
		case mapId === "3":
			msg.edit(msg + " Umbral WildWood");
			mapLink = mapLink + mapList[2];
			break;
		case "farranaccoast".indexOf(mapId) >= 0:
		case mapId === "4":
			msg.edit(msg + " Farranac Coast");
			mapLink = mapLink + mapList[3];
			break;
		case "deadlands".indexOf(mapId) >= 0:
		case mapId === "5":
			msg.edit(msg + " Deadlands");
			mapLink = mapLink + mapList[4];
			break;
		case "endlessshore".indexOf(mapId) >= 0:
		case mapId === "6":
			msg.edit(msg + " Endless Shore");
			mapLink = mapLink + mapList[5];
			break;
		case "callahanspassage".indexOf(mapId) >= 0:
		case mapId === "7":
			msg.edit(msg + " Callahans Passage");
			mapLink = mapLink + mapList[6];
			break;
		case "mooringcounty".indexOf(mapId) >= 0:
		case mapId === "8":
			msg.edit(msg + " Mooring County");
			mapLink = mapLink + mapList[7];
			break;
		case "weatheredexpanse".indexOf(mapId) >= 0:
		case mapId === "9":
			msg.edit(msg + " Weathered Expanse");
			mapLink = mapLink + mapList[8];
			break;
		default:
			msg.delete();
			return await message.channel.send("Mapa não encontrado!");
			break;
	}

	mapLink = mapLink + ".jpg";
	console.log(mapLink);

	await message.channel.send({files: [
		{
			attachment: mapLink,
			name: "map.png"
		}
	]});

	msg.delete();
}

module.exports.help = {
	name: "fox"
}