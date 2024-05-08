/*
! Union Types
* Union types allow us to give a value a few different possible types.
If the eventual value's type is included, TS will be happy!

* We can create a union type by using the single | (pipe character) to seperate the types we want to include.
It's like saying 'this thing is allowed to be this, this, or this.
TypeScript will enforce it from there!
*/

const guessAge = (age: number | string) => {
    return "Your age is: " + age; 
}

//* CAN pass a number or a string:
guessAge(30);
guessAge("29");

//! CANNOT pass something else:
// guessAge({ age: 32 })

let age: number | string = 21;
age = 23;
age = "24"

//? Using something other than primitive data types:
type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = { x: 1, y: 34 }
coordinates = { lat: 321.213, long: 23.334 }

/*
! Type Narrowing w/ Union Types
* Narrowing the Type is simply doing a type check before working with a value.
? If your value is a string you may want to use it diffferently than if you got a number.
* Since unions allow multiple types for a value, it's good to check what came through before working with it.
*/

function printAge(age: number | string): void {
    console.log(`You are ${age} years old.`);
}
printAge(23);
printAge("33");

function calculateTax(price: number | string, tax: number ) {
    //? What do we do here if the price comes back as a string? price * tax causes problems!
    //* We take advantage of type narrowing to discern what we're working with and go from there.
    // return price * tax;
    if(typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax
}


const isTeenager = (age: number | string) => {
    if (typeof age === "string") {
        console.log(age.charAt[0] === 1);
    }
    if (typeof age === "number") {
        console.log (age > 12 && age < 20);
    }
}

/*
! Union Types & Arrays
*/

const stuff: any[] = [1, 2, 3, 4, true, "Nike", {}];
const moreStuff: (number | string)[] = ["123", 21, "Yes", 55]
//? Above is different from (below accepts numbers OR strings, not both at once):
const evenMoreStuff: number[] | string[] = ["asd", "122"]

const coords: (Point | Loc)[] = []
coords.push({ lat: 321.213, long: 23.334 })
coords.push({ x: 213, y: 23 })

/*
! Literal Types
* These are not just types but the values themselves too!
* On its own, it's not super helpful...but combine it with something like unions and you have a very fine-tuned type option for TS to enforce.
*/

// A function with a literal + union type parameter:
// It HAS to be one of these choices to be an acceptable parameter
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
    return `The answer is ${answer}.`
}

//* Can provide one of the literals in the union:
giveAnswer("no");

//! Cannot provide anything else:
// giveAnswer("Not sure");

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Angry" //! Error

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"

let today: DayOfWeek = "Monday";