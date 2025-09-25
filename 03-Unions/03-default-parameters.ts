function estimateResponseTime(promptLength = 100, modelType = "text") {
    let baseNumber = 0;
    let rateNumber = 0;
    switch (modelType) {
        case "code":
            baseNumber = 3;
            rateNumber = 0.05;
            break;
        case "image":
            baseNumber = 5;
            rateNumber = 0.02;
            break;
        case "text":
            baseNumber = 2;
            rateNumber = 0.01;
            break;
    }
    return Math.round(baseNumber + rateNumber * promptLength);
}

console.log(estimateResponseTime());
console.log(estimateResponseTime(100, "code"));
console.log(estimateResponseTime(254, "image"));
console.log(estimateResponseTime(200, "poobah"));
