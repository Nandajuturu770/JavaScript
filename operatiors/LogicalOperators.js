/**
 * Logical Operators
 * Logical operators are used to combine or invert conditions — they help your program make decisions based on multiple comparisons.
 *
 * Types
 * | Operator | Name            | Example           | Meaning                                    |
 * | -------- | --------------- | ----------------- | ------------------------------------------ |
 * | `&&`     | **Logical AND** | `x > 5 && x < 10` | true **if both** conditions are true       |
 * | `||`     | **Logical OR**  | `x > 5 || x < 10` | true **if at least one** condition is true |
 * | `!`      | **Logical NOT** | `!(x > 5)`        | **inverts** the Boolean value              |
 *
 * Note:
 * Logical operators work with Boolean values (true or false) and return a Boolean (true or false) as a result.
 */

/**
 * Logical AND ( && )
 * Returns true only if both conditions are true.
 * If either one is false → whole expression is false.
 *
 * Truth Table for &&
 * | A     | B     | A&&B  |
 * | ----- | ----- | ------|
 * | true  | true  | true  |
 * | true  | false | false |
 * | false | true  | false |
 * | false | false | false |
 */
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
console.log("You can drive");
} else {
console.log("You cannot drive");
}

/**
 * Logical OR ( || )
 * Returns true if at least one condition is true.
 * Only false if both conditions are false.
 *
 * Truth Table for ||
 * | A     | B     | A || B  |
 * | ----- | ----- | ------- |
 * | true  | true  |  true   |
 * | true  | false |  true   |
 * | false | true  |  true   |
 * | false | false |  false  |
 */
let marks = 35;
let graceMarks = true;

if (marks >= 40 || graceMarks) {
console.log("You passed!");
} else {
console.log("You failed!");
}

/**
 * Logical NOT ( ! )
 * Reverses the Boolean value.
 * If a condition is true → it becomes false, and vice versa.
 *
 * Truth Table for !
 * | A     | !A    |
 * | ----- | ----- |
 * | true  | false |
 * | false | true  |
 */
let isLoggedIn = false;

if (!isLoggedIn) {
console.log("Please log in first.");
}
