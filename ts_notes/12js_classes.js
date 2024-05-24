/*
! Classes - A -JavaScript- Review & TS Introduction
* Classes are templates for creating objects in JavaScript.
* They contain a few different important pieces which allow creation and extension of customized (and nicely organized) objects.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}!`;
    }
}

// Using our blueprint to make a real person
const jimmy = new Person('Jimmy', 25);
console.log(jimmy.greet());


class Player {
    //? Instead of putting this in the constructor (as seen in comments below), we can put class fields here that every instance will receive automatically:
    //? As of now, score is a public field; anyone can access it and mutate it however they like.
    //? What if we don't want it to go the negative numbers?
    //! The # symbol marks a property as private and is only usable inside of the player class.
    #score = 0;
    #numLives = 10;

    static description = "Player in our game."

    // Constructors specify everything we need and expect for a new instance of our class.
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // Below is a valid syntax but there is a more modern way to accomplish this.
        // this.score = 0;
        // this.numLives = 10;
        this.#secret();
    }
    //? Because of numLives being marked as private, let's give users a way to check it.
    getScore() {
        return this.#score;
    }
    //? Above is a little clunky, let's use a proper getter:
    get score() {
        return this.#score;
    }

    //? Set score
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be 0 or greater.");
        }
        this.#score = newScore;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }

    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }
    updateScore(newScore) {
        this.#score = newScore;
    }
    taunt() {
        console.log('Booyah, baby!')
    }
    loseLife() {
        this.#numLives -= 1;
    }
    //? Private methods are also possible
    #secret() {
        console.log('This is secret!');
    }
}

const player1 = new Player("James", "Layton");
console.log(player1.getScore());
player1.updateScore(28);
console.log(player1.getScore());

const player2 = new Player("Elizabeth", "Fairview");
console.log(player2.last);


/*
! Getters & Setters
* For getters, use the keyword 'get', a space, and what you want to retrieve.
* Setters, used for changing/setting properties, take very similar syntax and are treated just like a property.
? This also allows us to add some logical to prevent invalid values.
*/

//? Now, because we have a proper 'getter', we can do things like this:
console.log(player1.fullName);
console.log(player1.score);

player1.score = 223;
console.log(player1.score);

console.log(player1.fullName);
player1.fullName = "Jimmy Beans";
console.log(player1.fullName);

/*
! Static Properties & Methods
* Putting a 'static' keyword in front of a property or method makes it available only on the class itself; not on instances of it!
* You'd do this if you had something to do or declare that has nothing to do with the instance of classes. (Making a random player, information about the class, etc.)
*/

console.log(Player.description);

/*
! Extending Classes
* We can share functionality with another class via inheritance / extending.
* The extends keyword gives the class everything from the class it's extending from, plus anything else you include in the new class as well.
*/

class AdminPlayer extends Player {
    constructor(powers) {
        // References the Player class' constructor
        super(first, last); 
        // Properties in the constructor unique to AdminPlayer
        this.powers = powers;
    }
    isAdmin = true;
}

const admin = new AdminPlayer("Adam", "Ministrator", ["moderate", "giveTimeOut"]);
admin.taunt(); // Not defined in AdminPlayer but in Player.

/*
! Super!
* Comes into play when we have a class extending another play and we have different properties we want to pass into the constructor.
*/