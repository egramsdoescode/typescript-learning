/**
 * In Typescipt you can have functions that specify the types of the arguments AND the type of the return value, if any.
 */

function calculateTotal(
    price: number,
    quantity: number,
    discount: number,
): number {
    return price * quantity * (1 - discount);
}

console.log(calculateTotal(2, 3, 0.8));
