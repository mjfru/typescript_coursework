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
printName({first: 'Mick', last: 'Jagger', age:473})
// However, if we put this in a variable first...
const mick = {first: 'Mick', last: 'Jagger', age:473}
printName(mick);
//? It's OK! Why?? - Generally if you have a variable with the properties you need and TS will only check if first and last are there. TS figures anything else called in the function is a mistake.