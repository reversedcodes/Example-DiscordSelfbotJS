const winston = require('winston');
const chalk = require("chalk")

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss'}), winston.format.printf(({ level, message, timestamp }) => {
        switch(level) {
            case "info":
                return `${chalk.cyan(`[${timestamp}]`)} [Server worker/${level.toUpperCase()}]: ${message}`;
            case "error":
                return `${chalk.cyan(`[${timestamp}]`)} ${chalk.red(`[Server worker/${level.toUpperCase()}]: ${message}`)}`;
            case "warn":
                return `${chalk.cyan(`[${timestamp}]`)} ${chalk.yellow(`[Server worker/${level.toUpperCase()}]: ${message}`)}`;
            case "debug":
                return `${chalk.cyan(`[${timestamp}]`)} ${chalk.blue(`[Server worker/${level.toUpperCase()}]: ${message}`)}`;
            case "critical":
                return `${chalk.cyan(`[${timestamp}]`)} ${chalk.redBright(`[Server worker/${level.toUpperCase()}]: ${message}`)}`;
            default:
                return `${chalk.cyan(`[${timestamp}]`)} [Server worker/${level.toUpperCase()}]: ${message}`;
        }
    })
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

function getLogger() {
    return logger;
}


module.exports = { 
    commandInfo: (content) => {
        return getLogger().info(chalk.yellow("[COMMANDS] ") + content);
    },
    eventsInfo: (content) => {
        return getLogger().info(chalk.yellow("[EVENTS] ") + content);
    }
}