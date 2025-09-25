type Priority = "low" | "medium" | "high" | "critical";

function setPriority(level: Priority) {
    switch (level) {
        case "medium":
            return 1;
        case "high":
            return 2;
        case "critical":
            return 3;
        default:
            return 0;
    }
}

console.log(setPriority("low"));
console.log(setPriority("medium"));
console.log(setPriority("high"));
console.log(setPriority("critical"));
