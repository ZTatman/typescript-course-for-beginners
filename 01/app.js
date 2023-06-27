/* ------ Core Types ------ */
// number   Ex: 1, 5.3, -10         All numbers, no differentiation between integers or floats
// string   Ex: "hi", 'hi', `hi`    All text values
// boolean  Ex: true, false         just these two, no "truthy" or "falsy" value
// Addition function with no typing, (works fine)
function add(num1, num2) {
    return num1 + num2;
}
var number1 = 2;
var number2 = 5.8;
var result1 = add(number1, number2);
console.log(":: result1: ", result1);
// What happens if we change number1 to be a string "2"?
// lets try it. Can you guess what the output might be?
var number3 = "2";
var result2 = add(number3, number2);
console.log(":: result2: ", result2);
// The output of result2 above is "25.8"...
// This is because the first operand (num1) on line 9 is a string.
// Javascript sees this and figures that the second operand must be of type string as well
// and coerces the type of num2 to be a string, concatenating the two string together.
// This may be simple to see now, but this can often happen when dealing with a lot of code,
// or maybe this value passed into the add() function is user input.
// To fix this, we can add types to the parameters of the function.
// Lets create a new one below:
function addTyped(num1, num2) {
    return num1 + num2;
}
