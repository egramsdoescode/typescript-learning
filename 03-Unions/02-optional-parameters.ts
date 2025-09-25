// NOTE: Optional types are union types under the hood, so in this case it is typed as possibly a string, but it will be a union of string | undefined under the hood.

function calculateApiCost(numReqs: number, tier?: string) {
    let cost: number;
    switch (tier) {
        case "pro":
            cost = 0.05;
            break;
        case "enterprise":
            cost = 0.03;
            break;
        default:
            cost = 0.1;
    }
    return `Cost: ${numReqs * cost}\nTier: ${tier ? tier : "unknown"}`;
}

console.log(calculateApiCost(15));
console.log(calculateApiCost(15, "pro"));
