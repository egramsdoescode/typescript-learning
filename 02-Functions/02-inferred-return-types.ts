/**
 * Typescript can infer function return values, however, this is a matter   of personal preference. You can be implicit or explicit, BUT, alwaus be  explicit with function argument types.
 * */

const combinePrompts = (systemPrompt: string, userPrompt: string) => {
    return `${systemPrompt}\n${userPrompt}`;
};

console.log(
    combinePrompts(
        "Your job is to serve customers",
        "Your job is to be the customer",
    ),
);
