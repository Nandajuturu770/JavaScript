/**
 * What is a Data Type?
 * Data type defines the kind of value a variable can hold.
 *
 * JavaScript has two main categories of data types:
 * 1.Primitive (basic types)
 * 2.Non-Primitive (Reference types)
 * ------------------------------------------------------------
 * Primitive Data Type
 *
 * What is primitive data type?
 * A primitive data type is a single, basic value
 *
 * Types:
 * string, number, boolean, undefined, null, symbol, bigInt
 *
 * Characteristics:
 * Stored by value
 * Immutable
 * Basic & lightweight
 * ------------------------------------------------------------
 * Non-Primitive
 *
 * What is non-primitive data type?
 * Non-primitive data types are complex types
 *
 * Types:
 * objects, arrays, functions
 *
 * Characteristics:
 * Stored by Reference
 * Mutable (Can Be Changed)
 * Complex Structure
 * Dynamic (Flexible Size)
 * Copied by Reference (Not by Value)
 * Created Using Constructors or Literals
 * typeof Returns “object”
 */

// *primitive data types
let name_ = "Nanda";
console.log(typeof name_)  // string
let age = 25;
console.log(typeof age) // number
let isStudent = true;
console.log(typeof isStudent) // Boolean
let address;
console.log(typeof address) // undefined
let phone = null;
console.log(typeof phone) // Null
let id = Symbol("uniqueID");
console.log(typeof id) // Symbol
let bigNum = 1234567890123n;
console.log(typeof bigNum) // bigInt