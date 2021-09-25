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
console.log(Direction2.Left);
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
console.log(sub(5, 3));
