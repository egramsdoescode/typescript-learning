// Using the pipe operator, we can create union types, variables that can be multiple different types
function getTicketInfo(id: string | number) {
    return `Processing ticket: ${typeof id === "string" ? parseInt(id.split("-")[1]) : id}`;
}

console.log(getTicketInfo(1243));
console.log(getTicketInfo("SUPPORT-1243"));
