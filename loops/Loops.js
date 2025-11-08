/**
 * Loop
 * A loop is a control structure that lets you run a block of code repeatedly as long as a specific condition remains true.
 * A loop helps you do the same task multiple times automatically,instead of writing the same code again and again.
 *
 * Types of Loops
 * | Type              | When to Use                                     | Description                      |
 * | ----------------- | ----------------------------------------------- | -------------------------------- |
 * | `for` loop        | When you know how many times to run             | Classic counting loop            |
 * | `while` loop      | When you don’t know how many times              | Runs while condition is true     |
 * | `do...while` loop | When you want it to run **at least once**       | Checks condition *after* running |
 * | `for...of` loop   | For looping through **arrays** or **iterables** | Easy to use for lists            |
 * | `for...in` loop   | For looping through **object properties**       | Used with key-value pairs        |
 */

/**
 * for - loop
 * Syntax:
 * for (initialization; condition; increment/decrement) {
 * // code block
 * }
 */

for (let i = 0; i < 10; i++) {
    console.log("number : ", i);
}

/**
 * while - loop
 * Used when you don’t know how many times to repeat.
 * Syntax:
 * while (condition) {
 * // code block
 * }
 * Note:
 * If you forget to update the value, it can cause an infinite loop.
 */

let i = 1;
while (i <= 5) {
    console.log("number : ", i);
    i++;
}

/**
 * do...while - loop
 * This loop runs at least once, even if the condition is false.
 * Syntax:
 * do {
 * // code block
 * } while (condition);
 */

let j = 1;
do {
    console.log("Value:", j);
    j++;
} while (j <= 5);
// condition fails - at least one time execution
let a = 10;
do {
    console.log("Running:", a);
    a++;
} while (a < 5);

/**
 * for...of -loop
 * Used to loop through arrays or strings (iterable objects).
 * Syntax:
 * for(let item of items){
 * // code
 * }
 */

let superHeroes = ["Iron Man", "Spider Man", "Ant Man", "Thor", "Captain America", "Black Panther"];
console.log("Super Heroes Names")
for (let superHero of superHeroes) {
    console.log(superHero);
}

/**
 * for...in - loop
 * Used to loop through object properties.
 * Syntax:
 * for(let item in items){
 * // code
 * }
 */

let studentDetails = {
    name: "Khesh",
    age: 7,
    standard: 3,
    favoriteColor: "Black",
    favoriteSubject: "Science",
    favoriteGame: "Badminton",
    favoriteDish: "Chapathi with chicken"
}
console.log("Student Details :: ");
for (let key in studentDetails) {
    console.log(key + " :: " + studentDetails[key]);
}