// The any annotation takes away type checking for that variable, in general this is bad practice
const systemPrompt: any = "Your purpose is to help customers";

// Do this instead
const userPrompt: string = "Your purpose is to use the product";

// Or this
const result = `System prompt: ${systemPrompt}\nUser prompt: ${userPrompt}`;

console.log(result);
