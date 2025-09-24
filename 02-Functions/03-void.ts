// The typescript return type void represents the return value of a function that does not return a value

// This needs to be fixed to return the string
// function logSystemEvent(
//     event: string,
//     severity: "info" | "warning" | "error",
// ): void {
//     console.log(`SYSTEM ${severity.toUpperCase()}: ${event}`);
// }

function logSystemEvent(event: string, severity: "info" | "warning" | "error") {
    return `SYSTEM ${severity.toUpperCase()}: ${event}`;
}

console.log(logSystemEvent("404", "error"));
console.log(logSystemEvent("User Logged In", "info"));
console.log(logSystemEvent("User Session Expires Soon", "warning"));
