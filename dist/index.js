"use strict";
// BASIC
let id = 5;
let company = "Gideon Odioks";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, "Gideon", true];
// Tuple
let person = [1, "Gideon", true];
// Tuple Array
let employee;
employee = [
    [1, 'John'],
    [2, 'Gideon'],
    [3, 'Odiokine'],
];
// Union
let pid;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Right"] = 3] = "Right";
    Direction1[Direction1["Left"] = 4] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up ";
    Direction2["Down"] = "Down";
    Direction2["Right"] = "Right";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Gideon"
};
// console.log(user)
// Type Assertion
let cid = 1;
let customerId = cid;
customerId = 5;
// console.log(customerId)
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(2,4))
// Void
function log(message) {
    console.log(message);
}
log("Odiokineh");
const user1 = {
    id: 1,
    name: "Gideon",
    age: 22
};
const user2 = {
    id: 2,
    name: "Odiokine",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now reistered`;
    }
}
const mum = new Person(2, "Atim");
const dad = new Person(4, "Okon");
// Using classes with Interface
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered with the ${this.id}`;
    }
}
// const me = new Person1(5, "Okon")
// How to extend classes  
// or Subclasses
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, "Nancy", "Developer");
// console.log(emp.register())
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', "Gideon", "Nancy"]);
console.log(strArray);
