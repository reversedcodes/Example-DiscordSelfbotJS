const { Client, Message } = require("discord.js-selfbot-v13");

module.exports = {
    aliases: ["p"],
    /**
     * @param {Message} ctx
     * @param {Array} args  
     * @param {Client} client 
     */
    async execute(ctx, args, client) {
        await ctx.reply("PONG!");
    }
}

