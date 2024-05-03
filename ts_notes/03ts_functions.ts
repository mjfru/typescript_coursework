/*
! Functions in TypeScript
* In TypeScript, we can specify the type of function parameters in a function definition.
* This allows TypeScript to enforce the types for the values being passed into your function.
? Therefore, typing parameters is just like typing variables.
? Without type annotation, it will default to 'any'.
*/

const encourageStudent = (name: string) => {
    return `Hey, ${name}, you're doing great!`;
}

// Can call this function with a string:
encourageStudent('Matt');

// Cannot call this with any other type:
// encourageStudent(82);

function square(num: number) {
    return num * num
}

const doSomething = (person: string, age: number, isFunny: boolean) => {}
//! Order matters!
doSomething("Jim", 33, true);

/*
! Adding Default Parameters
* With type annotations, where do we put them? What does it look like?
? They go at the very end, after an additional '=' equals sign.
*/

function greet(person: string = "stranger") {
    return `Hello, ${person}`;
}

/*
! Function Return Types
* We can specify the type returned by a function.
* Even though TypeScript can often infer this, it's sometimes best to be explicit.
? Simply add the type annotation after the function parameter list!
*/

// Creating a function with a return type:
//!                                    Here it is!
const addNums = (x: number, y: number):number => {
    return x + y;
}

addNums(5, 5); // 10

// A situation where the return value may vary...(sting | number when hovered):
function rando(num: number) {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

/*
! Anonymous Functions
* When TypeScript can infer how an unnamed function is going to be called, it can automatically infer its parameters' types.
*/

const numbers = [1, 2, 3];
// Contextual typing on an arrow function:
// numbers.forEach(num => {
//     return num.toUppercase(); //! Error! doesn't work for numbers!
// });

const colors = ["red", "yellow", "orange"]
colors.map(color => {
    return color.toUpperCase();
})

/*
! The Void Type
* Void is a return type for functiosn that doesn't return anything; it just means that this function is void of any data.

* TS can infer this fairly well but sometimes it may want you to annotate a function with a void return explicity.
*/

// A function that doesn't return anything:
const annoyUser = (num: number): void => {
    for (let i = 0; i < num; i++) {
        alert("Hiiiiiiiiiiiiiiii!");
    }
}

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}

/*
! The 'Never' Type
* The never type represents values that NEVER occur.
* We might use it to annotate a function that always throws an exception or a function that never finishes executing.

? Don't confuse this with void -- void returns undefined or null, which is still technically a type of value.
! With never, a function doesn't even finish executing!
*/

const neverStop = (): never => {
    while(true) {
        console.log("I'll go forever and everrrrrr.");
    }
}

// A function that throws an exception
const giveError = (msg: string) => {
    throw new Error(msg);
}