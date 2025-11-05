/**
 * VARIABLES
 *
 * What is variable?
 * Variables are containers used to store data.
 *
 * How many ways can we declare variables?
 * var   - for function-scoped or globally-scoped variables (older syntax).
 * let   - for block-scoped variables that can be changed later.
 * const - for block-scoped variables that should not change once set.
 *
 * Variable Naming Conventions
 * Must start with a letter, underscore (_), or dollar sign ($)
 * Can include letters, digits, underscores, or dollar signs
 * Are case-sensitive (myVar is different from myvar)
 * Avoid using reserved keywords as variable names
 *
 */

// *variables
studentName = "Peter Paul";
student_age = 15;
studentClass_ = 10;
_student_cgpa = 9.8;
// 123student_favorite_subject = 'math'; - variable name should not start with numbers
$student_favorite_subject = "English";

// *printing on console
console.log(studentName);
console.log(student_age);
console.log(studentClass_);
console.log(_student_cgpa);

// *let - keyword
let name_;
name_ = "Radha";
console.log(name_);
// let name_ = "Krishna"; - Cannot redeclare block-scoped variable

{
    let myName = "Sathyam Sundaram"
    console.log(myName);
}
// console.log(myName); - let variable we can not access out of the scope block.

// *var - keyword
{
    var myClass = 7;
    console.log(myClass);
}
console.log(myClass);
var myClass = "string"; // we can redeclare var variable
console.log(myClass);
{
    myClass = 90;
    console.log(myClass);
}

// *const - keyword
const constValue = 10;
//const constNam; - const variable should be declared
// constValue = 80; - const variable should not be re initialized
console.log(constValue);