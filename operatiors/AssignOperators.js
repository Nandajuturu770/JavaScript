/**
 * Assign Operators
 * Assignment operators are used to assign or update values of variables.
 *Types:
 *-----
 * | Operator | Example   | Same As      | Description            |
 * | -------- | --------- | ------------ | ---------------------- |
 * |   =      | `x = y`   | —            | Assigns value          |
 * |  +=      | `x += y`  | `x = x + y`  | Adds and assigns       |
 * |  -=      | `x -= y`  | `x = x - y`  | Subtracts and assigns  |
 * |  *=      | `x *= y`  | `x = x * y`  | Multiplies and assigns |
 * |  /=      | `x /= y`  | `x = x / y`  | Divides and assigns    |
 * |  %=      | `x %= y`  | `x = x % y`  | Remainder and assigns  |
 * |  **=     | `x **= y` | `x = x ** y` | Power and assigns      |
 */

let a = 5;
let b = 4;
console.log(`a value :: ${a} ; b value :: ${b}`);
console.log(` value of a+=b :: ${a+=b}`);
console.log(` value of a-=b :: ${a-=b}`);
console.log(` value of a*=b :: ${a*=b}`);
console.log(` value of a/=b :: ${a/=b}`);
console.log(` value of a%=b :: ${a%=b}`);
console.log(` value of a**=b :: ${a**=b}`);