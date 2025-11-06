// Print numbers from 1 to 10 on separate line - for
console.log("Print numbers from 1 to 10 on separate line");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers between 1 and 20- for
console.log("Print all even numbers between 1 and 20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3.Find the sum of numbers from 1 to 100 - for
console.log("Find the sum of numbers from 1 to 100");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("the sum of numbers from 1 to 100 is :: " + sum);

/**
 * Print this pattern - for
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 */
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* "
    }
    console.log(stars);
}

// Print numbers from 10 down to 1 (reverse order) - while
console.log("Print numbers from 10 down to 1 (reverse order)");
let whileI = 10;
while (whileI > 0) {
    console.log(whileI);
    whileI--;
}

// Find the sum of digits of a given number (e.g., for 1234, output 10).
console.log("Find the sum of digits of a given number - 1234");
let givenNumber = 1234;
let sumOfDigits = 0;
while (givenNumber > 0) {
    let lastDigit = givenNumber % 10;
    sumOfDigits += lastDigit;
    givenNumber = Math.floor(givenNumber / 10);
}
console.log("Find the sum of digits of a given number - 1234 is :: " + sumOfDigits)

// Check if a given number is a palindrome (e.g., 121 → palindrome, 123 → not).
console.log("Check if a given number is a palindrome");
let takenNumber = 12314;
let reverseNumber = 0;
let tempNumber = takenNumber;
while (tempNumber > 0) {
    let lastDigit = tempNumber % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    tempNumber = Math.floor(tempNumber / 10);
}
if (takenNumber === reverseNumber) {
    console.log(`the given ${takenNumber} is palindrome number`);
} else {
    console.log(`the given ${takenNumber} is Not palindrome number`);
}

//Keep asking the user for a number using prompt() until they enter a number greater than 100.(Stop when input > 100)
let sentValue = 0;
do {
    sentValue = prompt("Please enter your number");
} while (sentValue <= 100);
console.log("You entered a number greater than 100:", sentValue);

// Given an array let fruits = ["apple", "banana", "mango", "grape"]; Print each fruit name in uppercase.
let fruits = ["apple", "banana", "mango", "grape"];
console.log("using for of loop");
for (let fruit of fruits) {
    console.log(fruit.toUpperCase());
}
let car = { brand: "Tesla", model: "Model 3", year: 2024 };
console.log("using for in loop");
for (let key in car) {
    console.log(key + " : " + car[key]);
}

// Print all prime numbers between 1 and 50.
let initialValue = 1;
let finalValue = 50;
for (; initialValue <= finalValue; initialValue++) {
    let isPrime = true;
    for (let i = 2; i <= Math.floor(initialValue / 2); i++) {
        if (initialValue % i === 0)
            isPrime = false;
    }
    if (isPrime && initialValue > 1)
        console.log(initialValue);
}