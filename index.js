const { Client, Collection } = require("discord.js-selfbot-v13");
const { eventHandler } = require("./Handlers/eventHadler");
const { commandHandler } = require("./Handlers/commandHandler");
const { configs } = require("./Configs/configs");
const { eventsInfo } = require("./Utils/Logger");

console.clear();

const client = new Client();
client.commands = new Collection();

eventHandler(client);
commandHandler(client);

client.once("ready", () => eventsInfo(`Logged in as ${client.user.username}!`));

client.login(configs.token);
