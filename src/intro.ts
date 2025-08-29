// to add the type of the variable we use : type

//String
let company: string = "Google";

//Number
let id: number = 5;

// Boolean
let isPublished: boolean = true;

// Any - we can assign any type to the variable
let x: any = "Hello";

x = 10;

// Initialize the variable without a value
let age: number;

age = 10;

// Arrays that only contain numbers
let ids: number[] = [1,2,3,4,5];

// Arrays that contain any type
let arr: any[] = [1,2,3,4,5];

// Tuple
let person: [number, string, boolean] = [1, "John", true];

// Tuple array
let employee: [number, string][]

employee = [
    [1, "John"],
    [2, "Jane"],
    [3, "Jim"],
];

// Union
let pid: number | string
pid = 22
pid = "22";

// Enum - we can define a set of named constants
enum Direction1 {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

console.log(Direction1.Up);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
// we can use type alias to define the type of the object
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: "John",
}
// or we can use interface to define the type of the object
/*

const user: {
    id: number,
    name: string,
} = {
    id: 1,
    name: "John",
}*/

// Type Assertion
let cid: any = 10;

// let customerId = <number>cid

let customerId = cid as number;

// customerId = 10;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(1, 2));

// Arrow Functions
const addNum2 = (x: number, y: number): number => x + y;

console.log(addNum2(1, 2));

// Void
function log(message: string | number): void {
    console.log(message);
}

log("Hello");

// Interfaces
interface UserInterface {
    // readonly id: number, if we add readonly to the property it means that the property is readonly and cannot be changed
    id: number,
    name: string,
    age?: number, // optional if we add ? to the property it means that the property is optional
}

const user2: UserInterface = {
    id: 1,
    name: "John",
}

// Type can be used with primitive types and objects unlike using interface
type Point = number | string;
const p1: Point = 1;

// Interfact with functions
interface Mathfunc {
    (x: number, y: number): number;
}

const add: Mathfunc = (x, y) => x + y;

// Classes
class Person {
    // private id: number; // if we add private to the property it means that the property is private and cannot be accessed outside the class
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const brad = new Person(1, "John", 20);
