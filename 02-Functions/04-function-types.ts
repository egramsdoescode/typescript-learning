// This is a type alias, it is good practice to use upper camel case for type aliases

type SupportResponse = (name: string) => string;

const greetCustomer = (name: string) => {
    return `Hello ${name}, how can I assist you today?`;
};

const farewellCustomer = (name: string) => {
    return `Goodbye ${name}, have a great day!`;
};

function response(supportResponse: SupportResponse, name: string) {
    return supportResponse(name);
}

console.log(response(greetCustomer, "Ethan"));
console.log(response(farewellCustomer, "Sam"));
