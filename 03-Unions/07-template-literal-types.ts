type LogLevel = "info" | "warn" | "error";
type LogSourceType = "api" | "database" | "auth";

type LogMessage = `${LogLevel}: ${string}`;
type LogSource = `${LogSourceType}_${number}`;

function createLogEntry(message: LogMessage, source: LogSource) {
    return `[${source} LOG - ${message}]`;
}

console.log(createLogEntry("info: User logged in", "auth_1234"));
console.log(createLogEntry("warn: Database connection failed", "database_456"));
