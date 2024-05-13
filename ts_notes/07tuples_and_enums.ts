/*
! Tuples
* Tuples are a special type exclusive to TypeScript (they don't even exist in JS but do in other languages like Python).
* They are arrays of fixed lengths and ordered with specific types -- super rigid arrays.

? Oddly, Tuples in TS don't complain about pushing/popping on/off an extra value after creating.
*/

//* Correct examples:
let myTuple: [number, string, boolean];
myTuple = [10, "TS is fun!", true];

const color: [number, number, number] = [255, 255, 255];

type HTTPResponse = [number, string];
const gooodRes: HTTPResponse = [200, "OK"]
const badRes: HTTPResponse = [404, "NOT FOUND"];

const responses: HTTPResponse[] = [[404, "NOT FOUND"], [200, "OK"]]

/*
! Enums
* Enums allow us to define a set of named constants; we can give these constants numeric or string values.
Unless specified otherwise, enums default to starting at 0, not 1.
* To specify a value other than the default numbering system, simple add an equal sign '=' after declaring it.
*/

// Numeric Enums:
enum Responses {
    no, // 0
    yes, // 1
    maybe, // 2
}

// String Enums
enum Responses {
    nope = 'No',
    yeah = 'Yes',
    perhaps = 'Maybe'
}

// Heterogenous Enums
enum Reponses {
    nah = 0,
    yep = 1,
    likely = 'Maybe'
}

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED // Enum member - 2

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}