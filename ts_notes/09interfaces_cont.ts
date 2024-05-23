/*
! More on TS Interfaces
! Extending Interfaces
* Similar to how inheritance works in OOP, we can extend interfaces in a similar fashion.
? We are also not limited to one extension, we can extend from multiple interfaces.
*/

interface Dog {
    name: string;
    age: number;
}

// Reopening...
interface Dog {
    breed: string;
    bark(): string;
}

// Now, it already has: name, age, breed, bark()
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb sniffer" | "guide dog"
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 2,
    breed: "German Sheperd",
    bark() {
        return "Bark!"
    },
    job: "guide dog"
}

// Multiple extension

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 124894,
    email: "pierre@gmail.com",
    level: "intermediate",
    languages: ["JavaScript", "TypeScript"],
}

/*
! Types Vs. Interfaces
* Interfaces can only describe the shape of an object; we cannot use it for anything other than an object!
* Interfaces are allowed to be reopened and extended, types are not.
? With types, we can extend them a bit but with the '&' symbol instead.
*/