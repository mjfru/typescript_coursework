/*
! Objects in TypeScript
* Objects can be typed be declaring what the object should look like in the annotation.
* Accessing a property that isn't defined or performing operations without keeping types in mind will throw errors!
*/

const dog = {
    name: 'Gracie',
    breed: 'Boston Terrier',
    age: 9
}

function printName(person: { first: string, last: string }):void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: 'Tom', last: 'Smith'})

// {x: number, y: number}
let coordinate: {x: number, y: number} = {x: 34, y: 2};

                            // Denoting the object type
function randomCoordinate(): {x: number, y: number} {
    return {x: Math.random(), y: Math.random()}
}

// What happens when you add extra properties??
// It's not allowed!
// printName({first: 'Mick', last: 'Jagger', age:473})
// However, if we put this in a variable first...
const mick = {first: 'Mick', last: 'Jagger', age:473}
printName(mick);
//? It's OK! Why?? - Generally if you have a variable with the properties you need and TS will only check if first and last are there. TS figures anything else called in the function is a mistake.

/*
! Type Alias
* Instead of writing out object types in annotation, we can delcare them seperaterly in a type alias, which is simply the desired shape of the object.
? This allows us to make our code more readable and even reuse the types elsewhere in our code.
*/

// A type alias:
type Person = {
    name: string;
    age: number;
}

// Using the type alias in the annotation:
// const sayHappyBirthday = (person: Person) => {
//     return `Hey ${person.name}, congrats on turning ${age}.`
// }

// sayHappyBirthday({name: 'Jerry', age: 42})

/*
! Nested Objects Example
*/

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
    title: "Unchained Meloy",
    artist: "Righeous Brothers",
    numStreams: 12954812,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

//? What happens if you want an optional key-value pair??
//! Add a '?' before the type annotation
type Point = {
    x: number;
    y: number;
    z?: number
}

const myPoint: Point = { x:1, y:2, z:3}
const myPoint2: Point = { x:3, y:2}

/*
! The readonly modifier
* We can mark properties in an object as readonly using TypeScript!
*/

type User = {
    readonly id: number,
    username: string;
};

const user: User = {
    id: 20948,
    username: 'Dogluver223'
}

console.log(user.id) //* OK
// user.id = 394892 //! Error

/*
! Intersection Type
* We can have multiple types and then combine them with the '&'.
*/

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: 'yellow'
};

//? Now, let's give the intersection type an original property

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number;
}

const rover: CatDog = {
    numLives: 7,
    breed: 'Husky',
    age: 8
}