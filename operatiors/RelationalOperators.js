/**
 * Relational Operators
 * Relational (or comparison) operators are used to compare two values and determine their relationship.
 *
 * Types
 *-------
 * | Operator | Meaning                               | Example     | Result  |
 * | -------- | ------------------------------------- | ----------- | ------- |
 * | `==`     | Equal to                              | `5 == '5'`  | `true`  |
 * | `===`    | **Strictly equal** (value + type)     | `5 === '5'` | `false` |
 * | `!=`     | Not equal to                          | `5 != '5'`  | `false` |
 * | `!==`    | **Strictly not equal** (value + type) | `5 !== '5'` | `true`  |
 * | `>`      | Greater than                          | `10 > 5`    | `true`  |
 * | `<`      | Less than                             | `3 < 7`     | `true`  |
 * | `>=`     | Greater than or equal to              | `10 >= 10`  | `true`  |
 * | `<=`     | Less than or equal to                 | `5 <= 8`    | `true`  |
 *
 * Note:
 * They always return a Boolean value — either true or false.
 */

let a = 10, b = 20;
console.log(`a value :: ${a} , b value :: ${b}`);
console.log('a == b ', a==b);
console.log('a === b ', a===b);
console.log('a != b ', a!=b);
console.log('a !== b ', a!==b);
console.log('a > b ', a>b);
console.log('a < b ', a<b);
console.log('a >= b ', a>=b);
console.log('a <= b ', a<=b);

/**
 * >==	 No	Syntax Error	Does not exist
 * <==	 No	Syntax Error	Does not exist
 *
 * 5 >== 5   //  Syntax Error
 * 5 <== 5   //  Syntax Error
 *
 *Why?
 * Operators like:>, <, >=, <=
 * already compare numeric or string values directly — and there’s no type conversion issue with them.
 * So, “strict” comparison (like === or !==) only applies to equality operators (== / ===, != / !==).
 */
console.log(5 >= 5);     // true
console.log('7' >= 5);   // true (string '7' gets converted to number 7)
console.log('a' >= 'A'); // true (string comparison by Unicode)

/**
 * Rule of Comparison
 * 1️ Compare the first characters of both strings.
 * 2️ If one character is greater, that string is greater.
 * 3️ If they are equal, move to the next character.
 * 4️ Keep comparing until a difference is found or one string ends.
 */
console.log("10" > 5);    // true   → "10" converted to 10
console.log("2" > "10");  // true   → string comparison by characters ("2" > "1")
console.log("a" > 5);     // false  → "a" → NaN → comparison fails
console.log("apple" < "banana"); // true → string-to-string comparison

/**
 * console.log("java" > 5); // false
 * Explanation
 * JavaScript sees:
 * Left operand = "java" (a string)
 * Right operand = 5 (a number)
 * It tries to convert the string "java" into a number
 * using Number("java").
 * But "java" is not numeric,
 * so conversion fails and gives Number("java") → NaN   // NaN means “Not a Number”

 * | Expression    | Result |
 * | ------------- | ------ |
 * | `NaN > 5`     | false  |
 * | `NaN < 5`     | false  |
 * | `NaN == 5`    | false  |
 * | `NaN === NaN` | false  |
 *
 */

console.log("Apple" < "apple"); // true
/**
 * Why:
 * 'A' (Unicode 65)
 * 'a' (Unicode 97)
 * 'A' < 'a', so "Apple" < "apple"
 */