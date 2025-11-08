/**
 * What Is a Function?
 * A function is a block of code that performs a specific task —and can be reused whenever you need it.
 *
 * Types:
 * | Type                 | Example                     |
 * | -------------------- | --------------------------- |
 * | Function Declaration | `function greet() {}`       |
 * | Function Expression  | `let greet = function() {}` |
 * | Arrow Function       | `const greet = () => {}`    |
 */

/**
 * Function Declaration:
 *
 * Syntax:
 * function functionName(parameter1, parameter2) {
 * // code to execute
 * }
 * calling:
 * functionName(argument1, argument2);
 *
 * Parameters are placeholders (like variables inside a function).
 * Arguments are actual values you pass when calling the function.
 */

// simple function
function print(){
    console.log("Hello World!..");
}
print();

// parameter function
function parameterFunction(name){
    console.log(`Welcome ${name} to learning with me.`);
}
parameterFunction("JavaScript");

// function with Return Value
function add(number1 , number2){
    return number1+number2;
}
let number1 = Number(prompt("Enter your first number :"));
let number2 = Number(prompt("Enter your second number :"));
console.log(`Enter values are ${number1} and ${number2}`);
console.log("add :",add(number1, number2));

/**
 * Function Expression:
 * You can also store a function in a variable
 *
 * Syntax:
 * let functionName = function(parameters){
 * // code
 * }
 * calling:
 * functionName(arguments);
 */

let multiply = function(a, b){
    return a*b;
}
console.log("multiply :",multiply(number1, number2));

/**
 * Arrow Function (ES6 Feature)
 * A shorter and modern way to write functions
 *
 * Syntax:
 * let functionName = (parameters) => {
 * // code
 * }
 */

let subtraction = (a , b) =>{
    return a-b;
}
console.log("subtraction :",subtraction(number1, number2));