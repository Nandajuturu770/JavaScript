/**
 * What Are Conditional Statements?
 * Conditional statements are used to make decisions in your code —they allow your program to perform different actions based on whether a condition is true or false.
 *
 * Types:
 * if statement
 * if...else statement
 * if...else if...else ladder
 * switch statement
 * the ternary operator ? : is used as a shortcut)
 */

/**
 * if Statement
 * Used when you want to execute a block of code only if a condition is true.
 */

let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
}

/**
 * if...else Statement
 * Used when you want to execute one block if true, and another if false.
 */

let pass = 30;
if (pass >= 35) {
    console.log("Pass");
} else {
    console.log("All the best for next time");
}

/**
 * if...else if...else Ladder
 * Used when you have multiple conditions to check.
 */

let marks = 75;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 50) {
    console.log("Grade: B");
} else {
    console.log("All the best for next time");
}

/**
 * switch Statement
 * Used when you have many possible values for one variable.
 */

let day = prompt("Enter your number:");
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day")
}

/**
 * 5. Ternary Operator (Shortcut)
 * A short way to write simple if...else conditions.
 */

let adultOrNot = 20;
let result = adultOrNot >= 18 ? "Adult" : "Minor";
console.log(result);