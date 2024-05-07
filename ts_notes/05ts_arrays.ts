/*
! Arrays in TypeScript
* Arrays can be typed using a type annotation followed by empty array brackets, like number[] for an array of numbers.

? Note: These arrays only allow data of the one type inside them!
*/

// Using brackets:
    // String array:
    let names: string[] = ["John", "Tim", "Sarah"];
    // Number array:
    let ages: number[] = [24, 33, 45];

// Alternate syntax:
    // String array:
    let altNames: Array<string> = ["John", "Tim", "Sarah"]
    // Number array:
    let altAges: Array<number> = [24, 33, 45];
    // Boolean array:
    const bools: Array<boolean> = [true, false, true, true];

// Using custom types:

type Point = {
    x: number;
    y: number;
}

const coords: Point[] = []
coords.push({x: 23, y: 8})

/*
! Multi-dimensional Arrays
* To make a multi-dimensional array, simply add on another set of square brackets.
*/

const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]

const demo: number[][][] = [[[1]]]
