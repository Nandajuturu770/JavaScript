/**
 * Athematic Operations:
 * Arithmetic operators are symbols used to perform mathematical operations on numbers (or variables).
 *
 * | Symbol | Name           | Used For        |
 * | ------ | -------------- | --------------- |
 * | `+`    | Addition       | Add values      |
 * | `-`    | Subtraction    | Subtract values |
 * | `*`    | Multiplication | Multiply values |
 * | `/`    | Division       | Divide values   |
 * | `%`    | Modulus        | Get remainder   |
 * | `**`   | Exponentiation | Power           |
 * | `++`   | Increment      | Add 1           |
 * | `--`   | Decrement      | Subtract 1      |
 */

// *variables
let a = 10, b = 2;
console.log(`a value ${a} , b value ${b}`);

// *addition
console.log(`a value ${a} , b value ${b} : addition :: ${a+b}`);

// *subtraction
console.log(`a value ${a} , b value ${b} : subtraction :: ${a-b}`);

// *multiplication
console.log(`a value ${a} , b value ${b} : multiplication :: ${a*b}`);

// *division
console.log(`a value ${a} , b value ${b} : division :: ${a/b}`);

// *module
console.log(`a value ${a} , b value ${b} : module :: ${a%b}`);

// *exponentiation
console.log(`a value ${a} , b value ${b} : exponentiation :: ${a**b}`);

console.log(`a value ${a} , b value ${b} : subtraction :: ${a-b}`);

/**
 * Increment Operator(++)
 * | Type               | Syntax | Example        | Meaning                           |
 * | ------------------ | ------ | -------------- | --------------------------------- |
 * | Post-increment     | `x++`  | `let y = x++;` | Increases value *after* using it  |
 * | Pre-increment      | `++x`  | `let y = ++x;` | Increases value *before* using it |
 */

let x = 1;
console.log(`with out increment : ${x}`);
console.log(`with pre-increment ++x :: ${++x}`);
console.log(`while post-increment x++ :: ${x++}`);
console.log(`after post-increment x :: ${x}`);

/**
 * Decrement
 * | Type               | Syntax | Example        | Meaning                           |
 * | ------------------ | ------ | -------------- | --------------------------------- |
 * |   Post-decrement   | `x--`  | `let y = x--;` | Decreases value *after* using it  |
 * |   Pre-decrement    | `--x`  | `let y = --x;` | Decreases value *before* using it |
 */

let y = 5;
console.log(`with out decrement : ${y}`);
console.log(`with pre-decrement --y :: ${--y}`);
console.log(`while post-decrement y-- :: ${y--}`);
console.log(`after post-decrement y :: ${y}`);


