module.exports.config = {
	name: "out",
	version: "1.0.0",
	role: 1,
	hasPrefix: true,
	credits: "Developer",
	aliases: ["lv"],
	description: "Bot leaves the thread",
	usage: "out",
	cooldown: 10,
};
module.exports.run = async function({ api, event, args, admin }) {
	try { 
	if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
	if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
		} catch (error) {
			api.sendMessage(error.message, event.threadID, event.messageID);
		}
};
