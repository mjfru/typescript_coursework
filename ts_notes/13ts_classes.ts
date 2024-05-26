class Player {
    //! New declaration before the constructor
    //! readonly ensures it can be initialized and never changed
    readonly first: string;
    readonly last: string;

    //* Class fields -- TS will infer the type if needed
    
    //* Public - Everything is considered public by default; can use it to be clear
    //* Private - Can go in front of any property or method and is only usable inside the class itself.
    //? There is a discussion whether it is better to just use JS's # or 'private' in TS.
    private score: number = 0;
    //! Same as JS but with type declaration
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void {
        console.log("Secret method!")
    }
}

const elton = new Player("James", "Layt");


class Participant {
    // readonly first: string;
    // readonly last: string;

    //! Shortcut! Initializing them isn't needed if you do it like this.
    //! protected is only accessible in child classes, allowing it to be shared with classes it gives inheritance to.
    constructor(public first: string, public last: string, protected _score: number) {}

    //! Getters & Setters
    get fullName(): string {
        return `${this.first} ${this.last}`
    }
    get score(): number {
        return this._score;
    }
    //! No return types for setters
    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error ("Score cannot be negative!")
        }
        this._score = newScore;
    }
}

//! Protected Modifier
class SuperPlayer extends Participant {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 9999999;
    }
}

const john = new Participant("John", "Jay", 100);
john.fullName;
john.score;


//! Interfaces & Classes
interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Patagonia", "blue");

//! Creating Abstract Classes

//? What's the point if you can't create instances?
//* You define patterns/methods that must be inherited and utilized by children classes.
abstract class Employee {
    constructor(public first: string, public last: string) {}
    //! getPay() must be implemented now
    abstract getPay(): number;
    greet() {
        console.log('Hello!')
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const ashley = new FullTimeEmployee("Ashley", "Smith", 80000);
const bill = new PartTimeEmployee("Bill", "Thompson", 24, 1100);