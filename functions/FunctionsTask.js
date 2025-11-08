// Check Even or Odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0)
        console.log(`${number} is even`);
    else
        console.log(`${number} is odd`);
}
let number = Number(prompt("Enter your number :"));
checkEvenOrOdd(number);

// Square of a Number
function square(number) {
    return number ** 2;
}
console.log("square : ", square(number));

// Find the Largest Number
let greaterNumber = function (number1, number2) {
    if (number1 > number2)
        return number1;
    else
        return number2;
}
let number1 = Number(prompt("Please enter first number to check larger:"));
let number2 = Number(prompt("Please enter second number to check larger:"));
console.log(`${number}, and ${number2} are entered numbers.`);
console.log("Greater number is : ", greaterNumber(number1, number2));

// Calculate Factorial
const factorial = function (number) {
    let factorial = 1;
    while (number > 1) {
        factorial *= number;
        number--;
    }
    return factorial;
}
let checkNumber = Number(prompt("Enter number to calculate factorial:"));
console.log(`factorial of ${checkNumber} is ${factorial(checkNumber)}`);

// Reverse a String
let reverseString = (str) => {
    let string = str + "";
    let reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        let char = string.charAt(i);
        reverseString += char;
    }
    return reverseString;
}
let string = prompt("Enter any word to reverse");
console.log("Reverse of ", string, " is : " + reverseString(string));

// Count Vowels
const countVowels = (str) => {
    let array = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
    let count = 0;
    for (let char of str) {
        for (let vowel of array) {
            if (vowel === char) {
                count++;
            }
        }
    }
    return count;
}
let word = prompt("Please enter word to count vowels");
console.log(`Number of vowels of ${word} is ${countVowels(word)}`);

// Palindrome Check
const isPalindrome = (str) => {
    let upperStr = (str + "").toUpperCase();
    let reverseStr = upperStr.split("").reverse().join("");
    return upperStr === reverseStr;
}
let palindrome = prompt("Please enter word to check palindrome");
console.log(`${palindrome} `, isPalindrome(palindrome));