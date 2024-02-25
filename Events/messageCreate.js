const { Client, Message } = require("discord.js-selfbot-v13");
const configs = require("../Configs/configs");

module.exports = {
    once: false,
    /**
     * @param {Message} ctx 
     * @param {Client} client 
     */
    async execute(ctx, client) {
        let content = ctx.content;

        if(ctx.author.id == client.user.id) return;

        if(content.startsWith(configs.prefix)) {
            ctx.cancel = true;
            const args = content.slice(configs.prefix.length).trim().split(/ +/g);
            const commandName = args.shift().toLowerCase();

            if(commandName.length == 0) {
                console.log("Type your command.");
                return;
            }

            const command = client.commands.get(commandName);

            if(!command) {
                console.log("Command " + commandName + " not found.");
                return;
            }

            await command.execute(ctx, args, client);
        }
    }
}
