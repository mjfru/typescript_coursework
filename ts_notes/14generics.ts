/*
! Generics
* Generics (and their nasty syntax) allow us to define reusable functions and classes that work with multiple types rather than a single type.
*/

function wrapInArray<T>(element: T): T[] {
    return [element];
}

//? How is that different that this?
//? This function accepts a single number or string and returns a single number or string.
function doThing(thing: number | string): number | string {
    return `Did a ${thing}!`
}

//* A generic function will say: 'if you give me a number, I'll give YOU a number. If you give me a string, I'll give you a string.'

//? Typically, we use this syntax to specify an array type:
const nums: number[] = [];
//? But behind the scenes, generics are being used:
const numsInGenerics: Array<number> = [];

// Accepts some argument and returns that argument- the classic generics example:
function identity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

//? Instead of all these functions, we can condense them into one with generics.
function trueIdentity<Type>(item: Type): Type {
    return item;
}
//! Now, whatever the input type is will be the return type.

trueIdentity<string>("Yes");
trueIdentity<boolean>(false);

function getRandomElement<T>(list: T[]): T {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}

getRandomElement<string>(["a", "b", "c"]);
getRandomElement<number>([5, 4, 3, 2, 1]);

//? In many cases, TS can typically infer a type and this is no different with generics.
getRandomElement(["z", "x", "y"]); // It knows it'll return a string in this case.

//* If you're working with .tsx (JSX but with TypeScript), you use angle brackets all the time.
//* TS gets confused then when we use them with arrow functions, it thinks it's an HTML tag, and we therefore need a trailing comma like this: <T,>.

//! Generics with Multiple Types...and adding type constraints to the parameters
function merge<T extends object,U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({ name: 'Matt' }, { pets: ["gracie", "clarence"] });


interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

printDoubleLength("Hellllllooooo");

//! Default Type Parameters

function makeEmptyArray<T = number>(): T[] {
    return [];
}

const strings = makeEmptyArray<string>();
const arr = makeEmptyArray(); // Numbers array
const bools = makeEmptyArray<boolean>() // Also ok too!

//! Writing Generic Classes
interface Song {
    title: string,
    artist: string
};

interface Video {
    title: string;
    creator: string,
    resolution: string
};

class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el)
    }
}

new Playlist<Song>()
const songs = new Playlist<Song>()
const videos = new Playlist<Video>()