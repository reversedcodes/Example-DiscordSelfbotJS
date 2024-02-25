const fs = require("fs");
const { eventsInfo } = require("../Utils/Logger");

async function eventHandler(client) {

    const table = new ascii().setHeading("Events", "Status");
    const files = fs.readdirSync("./Events").filter((file) => file.endsWith(".js"));

    for(const file of files) { 
        const name = file.slice(0, -3);
        eventsInfo(`${name} Online.`);
        const event = require(`../Events/${file}`);
        if(event.once) {
            client.once(name, async (...args) => { event.execute(...args, client) });
        } else {
            client.on(name, async (...args) => {event.execute(...args, client)});
        }
    }
    return;
}

module.exports = { eventHandler };