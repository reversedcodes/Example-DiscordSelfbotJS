const fs = require("fs");
const ascii = require("ascii-table");

async function eventHandler(client) {

    const table = new ascii().setHeading("Events", "Status");
    const files = fs.readdirSync("./Events").filter((file) => file.endsWith(".js"));

    for(const file of files) { 
        const name = file.slice(0, -3);
        const event = require(`../Events/${file}`);
        if(event.once) {
            client.once(name, async (...args) => { event.execute(...args, client) });
        } else {
            client.on(name, async (...args) => {event.execute(...args, client)});
        }

        table.addRow(file.slice(0, -3), "Online");
    }
    return console.log(table.toString());
}

module.exports = { eventHandler };