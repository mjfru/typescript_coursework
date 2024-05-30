/*
! Type Narrowing Pt. 2

! Type Predicates
* TS allows us to write custom functions that can narrow the type of a value.
* These functions have a very special return type called a type predicate.
? A predicate takes the form parameterName is Type
*/

interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

// This 'special' function will tell you if it's a cat or a dog. Must match the name of the parameter, function must return a boolean.
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
    if(isCat(animal)) {
        animal // cat
        return "Meow"
    } else {
        animal // dog
    }
}

/*
! discriminated unions
* A common pattern in TS involves creating a literal property that is common across multiple types.
* We can then narrow the type using that literal property.
*/

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}
//

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster"
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow"
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig"
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind){
        case("pig"):
            return "Oink"
        case("cow"):
            return "Moo"
        case("rooster"):
            return "Cockadoodle-doo!"
        default:
            // We should never ever make it here if we handle all cases correctly. (Exhaustiveness Checking)
            const _exhaustiveCheck: never = animal
            return _exhaustiveCheck;
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
}
getFarmAnimalSound(stevie);

/*
! Exhaustiveness Checking

*/