const { Client, Collection } = require("discord.js-selfbot-v13");
const { eventHandler } = require("./Handlers/eventHadler");
const { commandHandler } = require("./Handlers/commandHandler");
const configs = require("./Configs/configs");

console.clear();

const client = new Client();
client.commands = new Collection();

client.once("ready", () => console.log(`Logged in as ${client.user.username}!`));

client.login(configs.token).then(() => {
    eventHandler(client);
    commandHandler(client);
})
