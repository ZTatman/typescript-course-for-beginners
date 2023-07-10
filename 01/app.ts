/* ------ Core Types ------ */

// number   Ex: 1, 5.3, -10         All numbers, no differentiation between integers or floats
// string   Ex: "hi", 'hi', `hi`    All text values
// boolean  Ex: true, false         just these two, no "truthy" or "falsy" value

// Addition function with no typing, (works fine)
function add(num1 ,num2) {
    return num1 + num2;
}

let number1 = 2;
let number2 = 5.8;
const result1 = add(number1, number2);
console.log(":: result1: ", result1);

// What happens if we create a variable to be a string of "2", and pass it to add()?
// lets try it. Can you guess what the output might be?
let number3 = "2";
const result2 = add(number3, number2);
console.log(":: result2: ", result2);

// The output of result2 above is "25.8"...
// This is because the first operand (num1) on line 9, which recieves number3 as a param, is a string.
// Javascript sees this and figures that the second operand must be of type string as well
// and coerces the type of num2 to be a string, concatenating the two string together. 
// Obviously this is wrong, but compiling this file (tsc app.ts) will not show any errors.


// To fix this, we can add types to the parameters of the function.
// Lets create a new one below:
function addTyped(num1: number, num2: number) {
    return num1 + num2;
}

// If we try to add a string and a number now, we will get an error when compiling.
/* NOTE: Typescript does not change your runtime code (this will still print out a result).
 *       This only helps during development as it points out mistakes*/
console.log(":: result3: ", addTyped(number3, number2))


/* ------ JavaScript Types vs. Typescript Types ------ */
// The core types mentioned above arent exlusive to just typescript...
// Javascript already knows about some types like number, boolean, and string.
// So then what is the difference between these types in JS vs TS?


// Well, the difference is that JavaScript uses "dynamic types". The type of a 
// variable in JavaScript is not known/checked until runtime! This means that if there
// is a type error you won't know about it until executing the code including the type error.

// Typescript uses "static types" set during development.
// For example a runtime check for numbers only using JS would look like the following.
function sum(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("function: sum can only accept parameters of type: number!")
    }
    return num1 + num2;
}
