const fs = require("fs");
const ascii = require("ascii-table");

async function eventHandler(client) {

    const table = new ascii().setHeading("Events", "Status");
    const files = fs.readdirSync("./Events").filter((file) => file.endsWith(".js"));

    for(const file of files) { 
        const event = require(`../Events/${file}`);
        if(event.once) {
            client.once(event.event, async (...args) => { event.execute(...args, client) });
        } else {
            client.on(event.event, async (...args) => {event.execute(...args, client)});
        }

        table.addRow(file.slice(0, -3), "Online");
    }
    return console.log(table.toString());
}

module.exports = { eventHandler };