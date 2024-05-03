/*
! Type Interference
* Type Inference refers to the TypeScript compiler's ability to infer types from certain values in your code.

* TypeScript can remember a value's type even if you didn't provide a type annotation, and it will enforce that type moving forward.
*/

// Creating a variable with a value but with a type annotation:
let x = 27;
// x = 'Twenty-seven'
// ERROR - Type 'string' is not assignable to type 'number'.

let tvShow = "The Office";
// Just hovering over this will tell you TS recognizes this value to be a string.
tvShow = "Parks & Recreation";
// tvShow = true; // ERROR!

let isFunny = true;
isFunny = false;
// isFunny = "nope" // ERROR!

/*
! Any
*'any' is an escape hatch!
* It turns off type checking for this variable so you can do your own thing.
! Note: This sort of defeats the purpose of TS and types, so use it sparingly!
*/

let myComplicatedData: any = "I'm going to be complicated!";
myComplicatedData = 87;
myComplicatedData = true;


const movies = ["Arrival", "The Thing", "Aliens", "Interstellar"];

let foundMovie: string; // Without the type annotation, this will infer, right now, it's of type 'any'.
for (let movie of movies) {
    if (movie === "The Thing") {
        foundMovie = "The Thing";
    }
}