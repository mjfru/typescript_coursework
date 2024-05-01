/*
! Introduction to TypeScript

! What is TypeScript? Why bother?
* JavaScript can be quirky and odd due to its development and original goals.
null * 213 = 0
undefined * 3993 = NaN
Saying something is just undefined in an object when it really doesn't exist...
* It is an imperfect language and while many fixes have be implemented, flaws still exist.

! TypeScript seeks to improve the experience of writing JavaScript, all JS is considered valid TypeScript but with the addition of -types-.

! Types
? What exactly are these?
* TS detects errors in our code without running it-- this is called static checking.
* It does this error checking on the basis of the 'kinds of data' in our program...Types!
This helps us find errors, analyzes our code as we type, and exists ONLY in development.
? Code is later compiled into JS for production.

! The tsc -filename-.ts converts and makes your code into a new .js file.

! Type Annotation
* Using TS, we can tell it things like 'this variable is a string', 'this function expects two numbers and returns a number', etc.

* Assigning a basic type to a variable is easy!
? Just add :Type after the variable name.
! let myVar: type = value
*/

// JS example
const myJSVariable = 'So Awesome!';

// TS example
const myTSVariable: string = 'So Awesome!';

let movieTitle: string = 'Gladiator';
movieTitle = 'Step Brothers';
//! Error: movieTitle = 9; (not a problem in JS, but in TS, we cannot change the type we declared like this)

/*
! Numbers
* Some programming languages have many number types - float, int, etc., in TypeScript, however (as well as JavaScript), numbers are just numbers.

? Numbers can be typed with a simple Type Annotation of number.

! Booleans
* Boolean variables represent simple true or false values.
? Booleans can be typed with a simple type annotation of 'boolean'.
*/

let myNumber: number = 42;
//! Error: myNumber = "String!"
myNumber = 60; // This is all good!

let myBoolean: boolean = true;
//! Error: myBoolean = 87;
myBoolean = false; // This is all good!

let gameOver: boolean = false;
gameOver = true;