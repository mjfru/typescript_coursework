/*
! Interfaces
* Interfaces are one of the most popular aspects of TS and serve almost the exact same purpose as the type alias.
* We can use them to create reusable, modular types that describe the -shape of objects- and ONLY objects.
! For now, let's ignore the differences between the two but know they are very similar to type aliases.
*/

// Interface (notice: no equal sign (unlike type aliases)):
interface Person {
    // readonly id: number; -- Also works in Interfaces
    name: string;
    age: number;
    nickname?: string; // Makes this optional
}

// Using the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${person.age}!`;
}

sayHappyBirthday({ name: 'Jerry', age: 42 });

const thomas: Person = {name: "Thomas", age: 35, nickname: "Tom"}

/*
! Interface Methods
*/

interface Animal {
    readonly id: number;
    name: string;
    nickname?: string;
    makeNoise: () => string;
    //? Or:
    // makeNoise(): string;
}

const dog: Animal = {
    id: 1234,
    name: "Pupper",
    nickname: "Pup",
    makeNoise: () => {
        return 'Bark!'
    }
}

//! Adding parameters to interface methods:
interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Sneakers",
    price: 80,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

shoes.applyDiscount(0.4);

/*
! Reopening Interfaces
* We can add new properties to interfaces after we've already described them.
* This doesn't redeclare an interface, it adds to whatever is already declared.
*/

interface Dog {
    name: string;
    age: number;
}

// Later on...
interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 1,
    breed: "Australian Sheperd",
    bark(){
        return "Woof bark"
    }
}