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
*/