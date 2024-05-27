/*
! Type Narrowing
* Type narrowing refers to a less-precise type, like unions, and narrow it down to be more accurate.

! Typeof Guard
* typeof Type Guards involve simply doing a type check before working with a value.
? Since unions allow multiple types for a vlaue, we can first check what came through before working with it.
*/

const isTeenager = (age: number | string) => {
    if (typeof age === 'string') {
        console.log(parseInt(age.charAt(0)) === 1);
    }
    if (typeof age === 'number') {
        console.log(age >12 && age < 20);
    }
}

function triple(value: number | string) {
    if(typeof value === "string") {
        return value.repeat(3);
    }
    //! TS is smart, it knows that if we make it here, the value can only be a number because the above statement was not true and there's only two types to choose from.
    return value * 3;
} 

/*
! Truthiness Guards
* Truthiness Type Guards involve checking a value for being truthy or falsy before working with it.
? This is helpful in avoiding errors when values might be null or undefined.
*/

// This might exist...or it might be null!
const el = document.getElementById('idk')

if (el) {
    // Must be an HTMLElement
    el
} else {
    // Must be null
    el
}

const printLetters = (word: string | null) => {
    if (word) {
        for(let char of word) {
            console.log(char);
        }
    } else {
        console.log('No word was provided...!')
    }
}

/*
! Equality Narrowing
* equality Type Guards involve comparing types to each other before doing certain operations with values.
? By checking two values against one another, we can be sure they're both the same before working with them in a type-specific way.
*/

const someFunc = (x: string | boolean, y: string | number) => {
    if (x === y) {
        // x and y are string in this case:
        x.toUpperCase();
        y.toUpperCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

/*
! The 'in' Operator Narrowing
* JavaScript's in operator helps check if a certain property exists in an object.
? This means we can use it to check if a value exists in an object, according to its type alias or aliases, before working with it.
*/

type Cat = { meow: () => void };
type Dog = { bark: () => void };

const talk = (creature: Cat | Dog) => {
    if ("meow" in creature) {
        console.log(creature.meow());
    } else {
        console.log(creature.bark());
    }
}

const kitty: Cat = { meow: () => 'Meooooww' };
talk(kitty);


interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    // numEpisodes only exists in TVShows...TS now knows which object you're refering to
    if("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

getRuntime({ title: "Amadeus", duration: 180 });
getRuntime( { title: "Spongebob", numEpisodes: 80, episodeDuration: 20 })

/*
! instanceOf Narrowing
* instanceOf is a JavaScript operator that allows us to check if one thing is an instance of another (hello, prototypes!).
? This can help us narrow types when working with things like classes.
*/

const printFullDate = (date: Date | string) => {
    if (date instanceof Date) {
        return date.toUTCString();
    } else {
        return new Date(date).toUTCString();
    }
}

class User {
    constructor(public username: string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        entity
    } else {
        entity
    }
}