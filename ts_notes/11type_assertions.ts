/*
! Type Assertions
* Sometimes, you might have more specific information about a value's type and you wat to make sure TypeScript knows it too.

* You can assert a value's type by using the 'as' keyword, followed by the specific type you want to assert.
*/

//? TypeScript infers a type of HTMLElement
// const myPic = document.querySelector("profile-image");

//? But we know a more specific type, so let's assert it!
const myPic = document.querySelector("profile-image") as HTMLImageElement;


let mystery: unknown = "Hello World!";
// const numChars = mystery.length // Error! Needs to be a string or array
const numChars = (mystery as string).length //? Now, this works!

//! An alternate syntax is using <> brackets (less common, doesn't work with JSX).