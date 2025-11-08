// Write a program that checks if a number is positive.
let number = prompt("Enter number to check positive or not.");

if (number > 0) {
    console.log(`Given ${number} is positive.`);
}

// Check if a person is eligible to vote.

let age = prompt("Please enter your age to check eligibly");
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// Given a number, check whether it’s even or odd.

let evenOrOdd = prompt("Please number to check even or odd:");
if (evenOrOdd % 2 === 0) {
    console.log(`${evenOrOdd} is even.`);
} else {
    console.log(`${evenOrOdd} is odd.`);
}

// Take two numbers and print which one is greater using if...else.

let first = Number(prompt("Enter first number :"));
let second = Number(prompt("Enter second number :"));
console.log(`${first}, and ${second} are entered.`);
if (first > second) {
    console.log(`${first} is greater number.`);
} else if (first < second) {
    console.log(`${second} is greater number.`);
} else {
    console.log(`${first}, and ${second} are equal.`);
}

// Take a student`s marks and print the grade

let marks = prompt("Enter your marks to check grades.");
if (marks >= 90 && marks <= 100) {
    console.log(`${marks} : A Grade`);
} else if (marks >= 75 && marks <= 89) {
    console.log(`${marks} : B Grade`);
} else if (marks >= 35 && marks <= 74) {
    console.log(`${marks} : c Grade`);
} else if (marks < 35) {
    console.log(`${marks} : D Grade`);
} else {
    console.log(`${marks} is not matched with our grades.`);
}

// Check if a number is divisible by both 3 and 5.

let divisible = prompt("Please enter a number to check divisible by both 3 and 5.");
if (divisible % 3 === 0 && divisible % 5 === 0) {
    console.log(`${divisible} is divisible by both 3 and 5.`);
} else {
    console.log(`${divisible} is Not divisible by both 3 and 5.`);
}

// Write a program that checks if a given year is a leap year or not.

let leapYear = prompt("Enter year to check leap year.");
if (leapYear % 4 === 0) {
    if (!(leapYear % 100 == 0 && leapYear % 400 === 0)) {
        console.log(`${leapYear} is not leap year.`);
    }
    console.log(`${leapYear} is leap year.`);
} else {
    console.log(`${leapYear} is not leap year.`);
}

// Take a number (1–7) and print the day of the week (1 = Monday, 2 = Tuesday, etc.).

let day = prompt("Enter number to check day");
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`${day} invalid number.`);
}

// Write a program that prints messages based on the temperature:

let temperature = prompt("Enter temperature");
if (temperature > 30) {
    console.log("It’s hot!");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Nice weather");
} else {
    console.log("It’s cold!");
}

// Given a number, use a ternary operator to check if it’s positive or negative, and print the result.

let ternaryOperation = prompt("Enter number to check positive or not.");
temperature > 0 ? console.log(`${ternaryOperation} is positive`) : console.log(`${ternaryOperation} is not positive`)