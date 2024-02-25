const fs = require("fs");
const { commandInfo } = require("../Utils/Logger");

async function commandHandler(client) {

    const table = new ascii().setHeading("Commands", "Status");
    const files = fs.readdirSync("./Commands").filter((file) => file.endsWith(".js"));

    for(const file of files) { 
        const name = file.slice(0, -3);
        const command = require(`../Commands/${file}`);
        client.commands.set(name, command);
        commandInfo(`${name} Online.`);
        const aliases = command.aliases;
        for(let i = 0; i < aliases.length; i++) { 
            const alias = aliases[i];
            client.commands.set(alias, command);
        }
    }
    return;
}

module.exports = { commandHandler };